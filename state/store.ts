import {combineReducers, configureStore} from '@reduxjs/toolkit'
import contracts from "./features/contractsSlice";
import schedules from "./features/schedulesSlice";
import auth from "./features/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist'
import {PersistConfig} from "redux-persist/es/types";
import {appointmentsApi, authApi, plansApi} from "../api";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {medicalCentersApi} from "../api/medicalCenters.api";
import {treatmentMediaApi} from "../api/treatmentMedia.api";
import {billingApi} from "../api/billing.api";

const rootReducer = combineReducers({
    contracts,
    schedules,
    auth,
    [authApi.reducerPath]: authApi.reducer,
    [plansApi.reducerPath]: plansApi.reducer,
    [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    [medicalCentersApi.reducerPath]: medicalCentersApi.reducer,
    [treatmentMediaApi.reducerPath]: treatmentMediaApi.reducer,
    [billingApi.reducerPath]: billingApi.reducer,
})

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(
            authApi.middleware,
            plansApi.middleware,
            appointmentsApi.middleware,
            medicalCentersApi.middleware,
            treatmentMediaApi.middleware,
            billingApi.middleware,
        ),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;