import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {SignInPayload, SignInResult, SignUpPayload, SignUpResult} from "../types";

// Define a service using a base URL and expected endpoints
export const authApi = createApi<any>({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.ADMIN_URL || ''}),
    endpoints: (builder) => ({
        signUp: builder.mutation<SignUpResult, SignUpPayload>({
            query: (payload) => ({
                url: `/auth/local/register`,
                method: 'POST',
                body: payload,
            }),
        }),
        signIn: builder.mutation<SignInResult, SignInPayload>({
            query: (payload) => ({
                url: `/auth/local/register`,
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSignUpMutation, useSignInMutation} = authApi