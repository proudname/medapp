import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from "../store";

export interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        establishSession: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        clearSession: (state) => {
            state.token = null;
        }
    },
})

// Action creators are generated for each case reducer function
// export const {increment} = counterSlice.actions

export const selectAuthState = (state: RootState): AuthState => state.auth;
export const {establishSession, clearSession} = authSlice.actions;

export default authSlice.reducer