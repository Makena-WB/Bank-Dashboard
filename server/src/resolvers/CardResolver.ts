import { createRandomCardNumber, createRandomNumber } from "./../utils/createRandom";
import { MyContext } from "./../MyContext";
import { isAuth } from "../middleware";
import { Resolver, Mutation, UseMiddleware, Ctx, Query, Arg } from "type-graphql";
import { User } from "../entity/User";
import { Account } from "../entity/Account";
import { Card } from "../entity/Card";

@Resolver()
export class CardResolver {
	/**
	 * Query for returning all the cards for an authenticated user
	 * @param param0
	 */
	@Query(() => [Card])
	@UseMiddleware(isAuth)
	async cards(@Ctx() { payload }: MyContext) {
		if (!payload) {
			return null;
		}

		const owner: User | undefined = await User.findOne({ where: { id: payload.userId } });

		if (owner) {
			const account: Account | undefined = await Account.findOne({ where: { owner: owner } });

			if (account) {
				const cards = await Card.find({ where: { account: account } });
				return cards;
			}
		}
		return null;
	}

	/**
	 * Mutation for creating a new card
	 * @param param0
	 */
	@Mutation(() => Card, { nullable: true })
	@UseMiddleware(isAuth)
	async createCard(
		@Ctx() { payload }: MyContext,
		@Arg("currency") currency: string
	): Promise<Card | null> {
		if (!payload) {
			throw new Error("Not authenticated");
		}

		const owner = await User.findOne({ where: { id: payload.userId } });
		if (!owner) throw new Error("User not found");

		const account = await Account.findOne({ where: { owner, currency } });
		if (!account) throw new Error("Account not found for currency");

		try {
			// Set expiry date to 3 years from now
			const now = new Date();
			const expiresIn = new Date(now.getFullYear() + 3, now.getMonth());
			const card = Card.create({
				owner,
				account,
				cardNumber: createRandomCardNumber(),
				expiresIn,
				pin: parseInt(createRandomNumber(4)),
				cvv: parseInt(createRandomNumber(3)),
				monthlySpendingLimit: 500,
			});
			await card.save();
			return card;
		} catch (err) {
			console.log(err);
			throw new Error("Failed to create card");
		}
	}
}
