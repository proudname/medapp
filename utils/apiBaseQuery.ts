import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const apiBaseQuery = fetchBaseQuery(
    {
        baseUrl: process.env.ADMIN_URL || '',
        prepareHeaders: (headers, api) => {
            if (api.endpoint.includes('register')) return;
            const {token} = api.getState().auth;
            if (token) headers.set('Authorization', `Bearer ${api.getState().auth.token}`)
        }
    })