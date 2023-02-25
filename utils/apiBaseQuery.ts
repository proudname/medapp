import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {RootState} from "../state/store";


export const apiBaseQuery = fetchBaseQuery(
    {
        baseUrl: process.env.ADMIN_URL + '/',
        prepareHeaders: (headers, api) => {
            const state: RootState = api.getState();
            const {token} = state.auth;
            if (token) headers.set('Authorization', `Bearer ${state.auth.token}`)
        }
    })