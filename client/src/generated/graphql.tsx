import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  balance: Scalars['Float'];
  bic: Scalars['String'];
  currency: Scalars['String'];
  iban: Scalars['String'];
  id: Scalars['Int'];
  sortCode: Scalars['String'];
};

export type AccountResponse = {
  __typename?: 'AccountResponse';
  account: Account;
  message: Scalars['String'];
};

export type Card = {
  __typename?: 'Card';
  cardNumber: Scalars['String'];
  cvv: Scalars['Float'];
  expiresIn: Scalars['DateTime'];
  id: Scalars['Int'];
  monthlySpendingLimit: Scalars['Float'];
  pin: Scalars['Float'];
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMoney: AccountResponse;
  createAccount: Scalars['Boolean'];
  createCard?: Maybe<Card>;
  createTransaction: Scalars['Float'];
  deleteAccount: Scalars['Boolean'];
  destroyAccount: Scalars['Boolean'];
  exchange: AccountResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updatePassword: Scalars['Boolean'];
};


export type MutationAddMoneyArgs = {
  amount: Scalars['Float'];
  currency: Scalars['String'];
};


export type MutationCreateAccountArgs = {
  currency: Scalars['String'];
};


export type MutationCreateCardArgs = {
  currency: Scalars['String'];
};


export type MutationCreateTransactionArgs = {
  currency: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  currency: Scalars['String'];
};


export type MutationExchangeArgs = {
  amount: Scalars['Float'];
  selectedAccountCurrency: Scalars['String'];
  toAccountCurrency: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  firsName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  postCode: Scalars['String'];
  streetAddress: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accounts: Array<Account>;
  cards: Array<Card>;
  me?: Maybe<User>;
  transactions: Array<Transaction>;
};


export type QueryAccountArgs = {
  currency: Scalars['String'];
};


export type QueryTransactionsArgs = {
  currency: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['String'];
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  transactionType: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  city: Scalars['String'];
  country: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  postCode: Scalars['String'];
  streetAddress: Scalars['String'];
};

export type AccountQueryVariables = Exact<{
  currency: Scalars['String'];
}>;


export type AccountQuery = (
  { __typename?: 'Query' }
  & { account: (
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'balance'>
  ) }
);

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = (
  { __typename?: 'Query' }
  & { accounts: Array<(
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'balance' | 'currency' | 'sortCode' | 'iban' | 'bic'>
  )> }
);

export type AddMoneyMutationVariables = Exact<{
  amount: Scalars['Float'];
  currency: Scalars['String'];
}>;


export type AddMoneyMutation = (
  { __typename?: 'Mutation' }
  & { addMoney: (
    { __typename?: 'AccountResponse' }
    & Pick<AccountResponse, 'message'>
    & { account: (
      { __typename?: 'Account' }
      & Pick<Account, 'id' | 'balance'>
    ) }
  ) }
);

export type CardsQueryVariables = Exact<{ [key: string]: never; }>;


export type CardsQuery = (
  { __typename?: 'Query' }
  & { cards: Array<(
    { __typename?: 'Card' }
    & Pick<Card, 'id' | 'cardNumber' | 'pin' | 'expiresIn' | 'cvv' | 'monthlySpendingLimit'>
  )> }
);

export type CreateAccountMutationVariables = Exact<{
  currency: Scalars['String'];
}>;


export type CreateAccountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createAccount'>
);

export type CreateCardMutationVariables = Exact<{
  currency: Scalars['String'];
}>;


export type CreateCardMutation = (
  { __typename?: 'Mutation' }
  & { createCard?: Maybe<(
    { __typename?: 'Card' }
    & Pick<Card, 'id' | 'cardNumber' | 'expiresIn' | 'cvv'>
  )> }
);

export type CreateTransactionMutationVariables = Exact<{
  currency: Scalars['String'];
}>;


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createTransaction'>
);

export type DeleteAccountMutationVariables = Exact<{
  currency: Scalars['String'];
}>;


export type DeleteAccountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAccount'>
);

export type DestroyAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DestroyAccountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'destroyAccount'>
);

export type ExchangeMutationVariables = Exact<{
  selectedAccountCurrency: Scalars['String'];
  toAccountCurrency: Scalars['String'];
  amount: Scalars['Float'];
}>;


export type ExchangeMutation = (
  { __typename?: 'Mutation' }
  & { exchange: (
    { __typename?: 'AccountResponse' }
    & Pick<AccountResponse, 'message'>
    & { account: (
      { __typename?: 'Account' }
      & Pick<Account, 'id' | 'balance'>
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'dateOfBirth' | 'streetAddress' | 'postCode' | 'city' | 'country'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'dateOfBirth' | 'streetAddress' | 'postCode' | 'city' | 'country'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  dateOfBirth: Scalars['String'];
  streetAddress: Scalars['String'];
  postCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type TransactionsQueryVariables = Exact<{
  currency: Scalars['String'];
}>;


export type TransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'transactionType' | 'date' | 'amount'>
  )> }
);

export type UpdatePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdatePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePassword'>
);


export const AccountDocument = gql`
    query Account($currency: String!) {
  account(currency: $currency) {
    id
    balance
  }
}
    `;

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useAccountQuery(baseOptions: Apollo.QueryHookOptions<AccountQuery, AccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
      }
export function useAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountQueryResult = Apollo.QueryResult<AccountQuery, AccountQueryVariables>;
export const AccountsDocument = gql`
    query Accounts {
  accounts {
    id
    balance
    currency
    sortCode
    iban
    bic
  }
}
    `;

/**
 * __useAccountsQuery__
 *
 * To run a query within a React component, call `useAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
      }
export function useAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
        }
export type AccountsQueryHookResult = ReturnType<typeof useAccountsQuery>;
export type AccountsLazyQueryHookResult = ReturnType<typeof useAccountsLazyQuery>;
export type AccountsQueryResult = Apollo.QueryResult<AccountsQuery, AccountsQueryVariables>;
export const AddMoneyDocument = gql`
    mutation AddMoney($amount: Float!, $currency: String!) {
  addMoney(amount: $amount, currency: $currency) {
    account {
      id
      balance
    }
    message
  }
}
    `;
export type AddMoneyMutationFn = Apollo.MutationFunction<AddMoneyMutation, AddMoneyMutationVariables>;

/**
 * __useAddMoneyMutation__
 *
 * To run a mutation, you first call `useAddMoneyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMoneyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMoneyMutation, { data, loading, error }] = useAddMoneyMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useAddMoneyMutation(baseOptions?: Apollo.MutationHookOptions<AddMoneyMutation, AddMoneyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMoneyMutation, AddMoneyMutationVariables>(AddMoneyDocument, options);
      }
export type AddMoneyMutationHookResult = ReturnType<typeof useAddMoneyMutation>;
export type AddMoneyMutationResult = Apollo.MutationResult<AddMoneyMutation>;
export type AddMoneyMutationOptions = Apollo.BaseMutationOptions<AddMoneyMutation, AddMoneyMutationVariables>;
export const CardsDocument = gql`
    query Cards {
  cards {
    id
    cardNumber
    pin
    expiresIn
    cvv
    monthlySpendingLimit
  }
}
    `;

/**
 * __useCardsQuery__
 *
 * To run a query within a React component, call `useCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCardsQuery(baseOptions?: Apollo.QueryHookOptions<CardsQuery, CardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
      }
export function useCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardsQuery, CardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
        }
export type CardsQueryHookResult = ReturnType<typeof useCardsQuery>;
export type CardsLazyQueryHookResult = ReturnType<typeof useCardsLazyQuery>;
export type CardsQueryResult = Apollo.QueryResult<CardsQuery, CardsQueryVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($currency: String!) {
  createAccount(currency: $currency)
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateCardDocument = gql`
    mutation createCard($currency: String!) {
  createCard(currency: $currency) {
    id
    cardNumber
    expiresIn
    cvv
  }
}
    `;
export type CreateCardMutationFn = Apollo.MutationFunction<CreateCardMutation, CreateCardMutationVariables>;

/**
 * __useCreateCardMutation__
 *
 * To run a mutation, you first call `useCreateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCardMutation, { data, loading, error }] = useCreateCardMutation({
 *   variables: {
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useCreateCardMutation(baseOptions?: Apollo.MutationHookOptions<CreateCardMutation, CreateCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCardMutation, CreateCardMutationVariables>(CreateCardDocument, options);
      }
export type CreateCardMutationHookResult = ReturnType<typeof useCreateCardMutation>;
export type CreateCardMutationResult = Apollo.MutationResult<CreateCardMutation>;
export type CreateCardMutationOptions = Apollo.BaseMutationOptions<CreateCardMutation, CreateCardMutationVariables>;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($currency: String!) {
  createTransaction(currency: $currency)
}
    `;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, options);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation DeleteAccount($currency: String!) {
  deleteAccount(currency: $currency)
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const DestroyAccountDocument = gql`
    mutation DestroyAccount {
  destroyAccount
}
    `;
export type DestroyAccountMutationFn = Apollo.MutationFunction<DestroyAccountMutation, DestroyAccountMutationVariables>;

/**
 * __useDestroyAccountMutation__
 *
 * To run a mutation, you first call `useDestroyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyAccountMutation, { data, loading, error }] = useDestroyAccountMutation({
 *   variables: {
 *   },
 * });
 */
export function useDestroyAccountMutation(baseOptions?: Apollo.MutationHookOptions<DestroyAccountMutation, DestroyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroyAccountMutation, DestroyAccountMutationVariables>(DestroyAccountDocument, options);
      }
export type DestroyAccountMutationHookResult = ReturnType<typeof useDestroyAccountMutation>;
export type DestroyAccountMutationResult = Apollo.MutationResult<DestroyAccountMutation>;
export type DestroyAccountMutationOptions = Apollo.BaseMutationOptions<DestroyAccountMutation, DestroyAccountMutationVariables>;
export const ExchangeDocument = gql`
    mutation Exchange($selectedAccountCurrency: String!, $toAccountCurrency: String!, $amount: Float!) {
  exchange(selectedAccountCurrency: $selectedAccountCurrency, toAccountCurrency: $toAccountCurrency, amount: $amount) {
    account {
      id
      balance
    }
    message
  }
}
    `;
export type ExchangeMutationFn = Apollo.MutationFunction<ExchangeMutation, ExchangeMutationVariables>;

/**
 * __useExchangeMutation__
 *
 * To run a mutation, you first call `useExchangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExchangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exchangeMutation, { data, loading, error }] = useExchangeMutation({
 *   variables: {
 *      selectedAccountCurrency: // value for 'selectedAccountCurrency'
 *      toAccountCurrency: // value for 'toAccountCurrency'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useExchangeMutation(baseOptions?: Apollo.MutationHookOptions<ExchangeMutation, ExchangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExchangeMutation, ExchangeMutationVariables>(ExchangeDocument, options);
      }
export type ExchangeMutationHookResult = ReturnType<typeof useExchangeMutation>;
export type ExchangeMutationResult = Apollo.MutationResult<ExchangeMutation>;
export type ExchangeMutationOptions = Apollo.BaseMutationOptions<ExchangeMutation, ExchangeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
      firstName
      lastName
      dateOfBirth
      streetAddress
      postCode
      city
      country
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    firstName
    lastName
    dateOfBirth
    streetAddress
    postCode
    city
    country
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateOfBirth: String!, $streetAddress: String!, $postCode: String!, $city: String!, $country: String!) {
  register(email: $email, password: $password, firsName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, streetAddress: $streetAddress, postCode: $postCode, city: $city, country: $country)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      dateOfBirth: // value for 'dateOfBirth'
 *      streetAddress: // value for 'streetAddress'
 *      postCode: // value for 'postCode'
 *      city: // value for 'city'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const TransactionsDocument = gql`
    query Transactions($currency: String!) {
  transactions(currency: $currency) {
    id
    transactionType
    date
    amount
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
  updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;