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
        updateToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
// export const {increment} = counterSlice.actions

export const selectToken = (state: RootState) => state.auth.token;
export const {updateToken} = authSlice.actions;

export default authSlice.reducer