import {createApi} from '@reduxjs/toolkit/query/react'
import {GetPlansResponse, UpdatePlanPayload, UpdatePlanResponse,} from "../types";
import {apiBaseQuery} from "../utils/apiBaseQuery";

// Define a service using a base URL and expected endpoints
export const plansApi = createApi({
    reducerPath: 'plansApi',
    baseQuery: apiBaseQuery,
    tagTypes: ['Plan'],
    endpoints: (builder) => ({
        getPlans: builder.query<GetPlansResponse, void>({
            query: () => ({
                url: `/api/plans/my?populate=image&sort=week`,
                method: 'GET'
            }),
            providesTags: [{type: 'Plan', id: 'LIST'}]
        }),
        updatePlan: builder.mutation<UpdatePlanResponse, { id: string | number, payload: UpdatePlanPayload }>({
            query: ({id, payload}) => ({
                url: `/api/plans/my/${id}`,
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['Plan']
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetPlansQuery, useUpdatePlanMutation} = plansApi