// este é o store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/counter/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];