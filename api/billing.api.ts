import {createApi} from '@reduxjs/toolkit/query/react'
import {apiBaseQuery} from "../utils/apiBaseQuery";

// Define a service using a base URL and expected endpoints
export const billingApi = createApi({
    reducerPath: 'billingApi',
    baseQuery: apiBaseQuery,
    endpoints: (builder) => ({
        generatePromo: builder.mutation<{ result: string }, void>({
            query: () => ({
                url: `/api/billing/promo`,
                method: 'POST'
            }),
        }),
        getMyBonusTransactions: builder.query<{
            result: {
                id: string,
                userId: string,
                amount: number,
                reason: string,
                walletType: string,
                type: string,
                createdAt: string
            }[]
        }, void>({
            query: () => ({
                url: `/api/billing/transactions/bonus/my`,
                method: 'GET'
            }),
        }),
        getMyBonusWallet: builder.query<{ result: { userId: string, balance: number } }, void>({
            query: () => ({
                url: `/api/billing/bonus-wallet/my`,
                method: 'GET'
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGeneratePromoMutation, useGetMyBonusTransactionsQuery, useGetMyBonusWalletQuery} = billingApi