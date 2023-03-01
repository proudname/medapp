import {createApi} from '@reduxjs/toolkit/query/react'
import {
    ChangePasswordPayload,
    ChangePasswordResult,
    ForgotPasswordPayload,
    ForgotPasswordResult,
    SignInPayload,
    SignInResult,
    SignInWithProviderPayload,
    SignUpPayload,
    SignUpResult
} from "../types";
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
        forgotPassword: builder.mutation<ForgotPasswordResult, ForgotPasswordPayload>({
            query: (payload) => ({
                url: `/api/auth/forgot-password`,
                method: 'POST',
                body: payload,
                headers: {}
            }),
        }),
        changePassword: builder.mutation<ChangePasswordResult, ChangePasswordPayload>({
            query: (payload) => ({
                url: `/api/auth/reset-password`,
                method: 'POST',
                body: payload,
                headers: {}
            }),
        }),
        signInWithProvider: builder.mutation<SignInResult, SignInWithProviderPayload>({
            query: ({provider, token}) => ({
                url: `/api/auth/${provider}/callback?access_token=${token}`,
                method: 'GET',
                headers: {}
            }),
        }),
        checkToken: builder.query<SignInResult, string | null>({
            query: (token) => ({
                url: `/api/users/me`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useSignUpMutation,
    useSignInMutation,
    useCheckTokenQuery,
    useSignInWithProviderMutation,
    useForgotPasswordMutation,
    useChangePasswordMutation
} = authApi