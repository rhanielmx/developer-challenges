'use client';

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

export const getUser = async (token: string) => {
  const response = await api.get('/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response
};

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/authenticate', credentials);
  return response
};