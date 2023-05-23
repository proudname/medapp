import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {RootState} from "../state/store";
import Constants from 'expo-constants';

export const apiBaseQuery = fetchBaseQuery(
    {
        baseUrl: Constants!.expoConfig!.extra!.adminUrl + '/',
        prepareHeaders: (headers, api) => {
            const state: RootState = api.getState();
            const {token} = state.auth;
            if (token) headers.set('Authorization', `Bearer ${state.auth.token}`)
        }
    })