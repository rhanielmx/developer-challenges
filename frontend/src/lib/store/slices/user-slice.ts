'use client';

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from './auth-slice';

export interface UserResponse {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
}

interface UserState {
  user: UserResponse | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice;