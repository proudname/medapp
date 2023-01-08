import {createSlice} from '@reduxjs/toolkit'
import {Contract} from "../../types";
import type {RootState} from "../store";

export interface ContractsState {
    contracts: Contract[]
}

const initialState: ContractsState = {
    contracts: [
        {
            id: '111',
            shot: 'shot'
        },
        {
            id: '122',
            shot: 'shot'
        },
        {
            id: '133',
            shot: 'shot'
        }
    ]
}

export const contractsSlice = createSlice({
    name: 'contracts',
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const {increment} = counterSlice.actions

export const selectContracts = (state: RootState) => state.contracts;

export default contractsSlice.reducer