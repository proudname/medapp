import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from "../store";
import {Plan} from "../../types";

export interface PlansState {
    plans: Plan[]
}

const initialState: PlansState = {
    plans: [
        {
            id: '111',
            instructions: [
                {
                    description: 'dafas'
                }
            ]
        },
        {
            id: '112',
            instructions: [
                {
                    description: 'dafas'
                }
            ]
        }
    ]
}

export const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {},
})

export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer