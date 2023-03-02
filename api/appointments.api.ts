import {createApi} from '@reduxjs/toolkit/query/react'
import {
    CreateAppointmentPayload,
    CreateAppointmentResponse,
    GetAppointmentResponse,
    GetAppointmentsResponse,
    UpdateAppointmentPayload,
    UpdateAppointmentResponse
} from "../types";
import {apiBaseQuery} from "../utils/apiBaseQuery";

// Define a service using a base URL and expected endpoints
export const appointmentsApi = createApi({
    reducerPath: 'appointmentsApi',
    baseQuery: apiBaseQuery,
    tagTypes: ['Appointments'],
    endpoints: (builder) => ({
        getAppointments: builder.query<GetAppointmentsResponse, void>({
            query: () => ({
                url: `/api/appointments/my?populate=medicalCenter&sort=date`,
                method: 'GET'
            }),
            providesTags: ['Appointments']
        }),
        getAppointment: builder.query<GetAppointmentResponse, string | number>({
            query: (id) => ({
                url: `/api/appointments/my/${id}?populate=medicalCenter`,
                method: 'GET'
            }),
            providesTags: ['Appointments']
        }),
        createAppointment: builder.mutation<CreateAppointmentResponse, CreateAppointmentPayload>({
            query: (payload) => ({
                url: `/api/appointments/my`,
                method: 'POST',
                body: {
                    data: payload
                },
            }),
            invalidatesTags: ['Appointments']
        }),
        updateAppointment: builder.mutation<UpdateAppointmentResponse, UpdateAppointmentPayload>({
            query: ({id, payload}) => ({
                url: `/api/appointments/my/${id}`,
                method: 'PUT',
                body: {
                    data: payload
                },
            }),
            invalidatesTags: ['Appointments']
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAppointmentsQuery,
    useGetAppointmentQuery,
    useCreateAppointmentMutation,
    useUpdateAppointmentMutation,
} = appointmentsApi