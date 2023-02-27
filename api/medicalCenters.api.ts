import {createApi} from '@reduxjs/toolkit/query/react'
import {apiBaseQuery} from "../utils/apiBaseQuery";
import {GetApiMedicalCentersResponse} from "../types/medical-centers";

// Define a service using a base URL and expected endpoints
export const medicalCentersApi = createApi({
    reducerPath: 'medicalCentersApi',
    baseQuery: apiBaseQuery,
    endpoints: (builder) => ({
        getMedicalCenters: builder.query<GetApiMedicalCentersResponse, void>({
            query: () => ({
                url: `/api/medical-centers`,
                method: 'GET'
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMedicalCentersQuery} = medicalCentersApi