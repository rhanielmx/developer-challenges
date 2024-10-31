'use client';

import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchWithType } from '@/lib/fetch-with-type';
import { clearUser, setUser, type UserResponse } from '../slices/user-slice';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (token: string, { dispatch }) => {
    try {
      const { user } = await fetchWithType<{user: UserResponse}>('http://localhost:3333/api/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
      })
      console.log(user)
      dispatch(setUser(user))
    } catch (error) {
      dispatch(clearUser())
      throw error
    }
  }
);