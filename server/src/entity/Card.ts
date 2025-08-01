import { ObjectType, Field, Int } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column } from "typeorm";
import { Transaction } from "./Transaction";
import { User } from "./User";
import { Account } from "./Account";

/**
 * Cards table
 */
@ObjectType()
@Entity("cards")
export class Card extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.cards, { onDelete: "CASCADE" })
	owner: User;

	@ManyToOne(() => Account, (account) => account.cards, { onDelete: "CASCADE" })
	account: Account;

	@OneToMany(() => Transaction, (transaction) => transaction.card, { onDelete: "CASCADE" })
	transactions: Transaction[];

	@Field()
	@Column()
	cardNumber: string;

	@Field()
	@Column()
	pin: number;

	@Field()
	@Column()
	expiresIn: Date;

	@Field()
	@Column()
	cvv: number;

	@Field()
	@Column()
	monthlySpendingLimit: number;
}
