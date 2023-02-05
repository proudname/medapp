import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CreateAppointmentPayload, CreateAppointmentResponse, GetAppointmentsResponse} from "../types";

// Define a service using a base URL and expected endpoints
export const appointmentsApi = createApi({
    reducerPath: 'appointmentsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.ADMIN_URL || ''}),
    endpoints: (builder) => ({
        getAppointments: builder.query<GetAppointmentsResponse, undefined>({
            query: () => ({
                url: `/appointments`,
                method: 'GET'
            }),
        }),
        createAppointment: builder.mutation<CreateAppointmentResponse, CreateAppointmentPayload>({
            query: (payload) => ({
                url: `/appointments`,
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAppointmentsQuery, useCreateAppointmentMutation} = appointmentsApi