'use client';

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user-slice'
import authReducer from './slices/auth-slice'
import { thunk } from 'redux-thunk'

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    auth: authReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});