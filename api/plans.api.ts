import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {GetPlansResponse, UpdatePlanPayload, UpdatePlanResponse,} from "../types";

// Define a service using a base URL and expected endpoints
export const plansApi = createApi<any>({
    reducerPath: 'plansApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.ADMIN_URL || ''}),
    endpoints: (builder) => ({
        getContracts: builder.query<GetPlansResponse>({
            query: () => ({
                url: `/plans`,
                method: 'GET'
            }),
        }),
        updateContract: builder.mutation<UpdatePlanResponse, UpdatePlanPayload>({
            query: (payload) => ({
                url: `/plans`,
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetPlansQuery, useUpdatePlanMutation} = plansApi