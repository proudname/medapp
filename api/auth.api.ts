import {createApi} from '@reduxjs/toolkit/query/react'
import {SignInPayload, SignInResult, SignUpPayload, SignUpResult} from "../types";
import {apiBaseQuery} from "../utils/apiBaseQuery";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: apiBaseQuery,
    endpoints: (builder) => ({
        signUp: builder.mutation<SignUpResult, SignUpPayload>({
            query: (payload) => ({
                url: `/api/auth/local/register`,
                method: 'POST',
                body: payload,
                headers: {}
            }),
        }),
        signIn: builder.mutation<SignInResult, SignInPayload>({
            query: (payload) => ({
                url: `/api/auth/local`,
                method: 'POST',
                body: payload,
                headers: {}
            }),
        }),
        me: builder.query<SignInResult, void>({
            query: () => ({
                url: `/api/users/me`,
                method: 'GET',
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSignUpMutation, useSignInMutation, useMeQuery} = authApi