import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CreateContractPayload, CreateContractResponse, GetContractsResponse,} from "../types";

// Define a service using a base URL and expected endpoints
export const contractsApi = createApi<any>({
    reducerPath: 'contractsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.ADMIN_URL || ''}),
    endpoints: (builder) => ({
        getContracts: builder.query<GetContractsResponse>({
            query: (payload) => ({
                url: `/contracts`,
                method: 'GET'
            }),
        }),
        createContract: builder.mutation<CreateContractResponse, CreateContractPayload>({
            query: (payload) => ({
                url: `/contracts`,
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetContractsQuery, useCreateContractMutation} = contractsApi