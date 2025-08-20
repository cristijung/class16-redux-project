//aqui vai o store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/counter/CounterSlice';

export const store = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        }
    });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];