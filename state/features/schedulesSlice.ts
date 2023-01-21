import {createSlice} from '@reduxjs/toolkit'
import {Schedule} from "../../types";
import type {RootState} from "../store";

export interface SchedulesState {
    schedules: Schedule[]
}

const initialState: SchedulesState = {
    schedules: [
        {
            id: '111',
            doctor: {
                id: '123',
                name: 'Test doctor'
            },
            time: new Date().toString()
        },
        {
            id: '112',
            doctor: {
                id: '124',
                name: 'Test doctor 2'
            },
            time: new Date().toString()
        },
    ]
}

export const schedulesSlice = createSlice({
    name: 'schedules',
    initialState,
    reducers: {},
})

export const selectSchedules = (state: RootState) => state.schedules;

export default schedulesSlice.reducer