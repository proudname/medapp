import {createApi} from '@reduxjs/toolkit/query/react'
import {apiBaseQuery} from "../utils/apiBaseQuery";
import {TreatmentMediaResponse} from "../types/treatmentMedia";

// Define a service using a base URL and expected endpoints
export const treatmentMediaApi = createApi({
    reducerPath: 'treatmentMediaApi',
    baseQuery: apiBaseQuery,
    endpoints: (builder) => ({
        getMedia: builder.query<TreatmentMediaResponse, void>({
            query: () => ({
                url: `/api/treatment-media?populate=video`,
                method: 'GET'
            }),
        })
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMediaQuery} = treatmentMediaApi