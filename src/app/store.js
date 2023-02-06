import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//import counterReducer from '../features/counter/counterSlice';
import {guitarReducer} from '../features/guitar/guitarSlice';
import { guitarstatReducer } from '../features/guitarstats/guitarStatSlice';

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
    guitarstat: guitarstatReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
