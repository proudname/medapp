import {configureStore} from '@reduxjs/toolkit'
import contracts from "./features/contractsSlice";
import schedules from "./features/schedulesSlice";
import plansSlice from "./features/plansSlice";

export const store = configureStore({
    reducer: {
        contracts,
        schedules,
        plansSlice
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;