'use client'

import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

export const getUser = async (token: string) => {
  const response = await api.get('/profile', {
    headers: { 
      Authorization: `Bearer ${token}`
    },
  })
  return response
}

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/authenticate', credentials)
  return response
}