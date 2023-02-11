import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//import counterReducer from '../features/counter/counterSlice';
import {guitarReducer} from '../features/guitar/guitarSlice';
import { guitarstatReducer } from '../features/guitarstats/guitarStatSlice';
import { guitarstatReducer2 } from '../features/guitarstats2/guitarStatSlice2';
import { contactReducer } from '../features/Contact/contactSlice';

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
    guitarstat: guitarstatReducer,
    guitarstat2: guitarstatReducer2,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
