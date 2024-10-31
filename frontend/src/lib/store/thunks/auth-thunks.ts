'use client';

import { createAsyncThunk } from '@reduxjs/toolkit'
import { setAuth, clearAuth } from '../slices/auth-slice'
import { fetchWithType } from '@/lib/fetch-with-type'

interface Credentials { 
  email: string
  password: string
}

export interface TokenResponse {
  access_token: string
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, { dispatch }) => {
    try {
      const { access_token: accessToken } = await fetchWithType<TokenResponse>('/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      dispatch(setAuth(accessToken))
    } catch (error) {
      dispatch(clearAuth())
      throw error;
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    dispatch(clearAuth())
  }
);