import type { Machine } from '@/components/dashboard/machine/machines-table'
import { api } from '@/lib/api'

export interface GetMachinesResponse {
  machines: Machine[]
}
export const getMachines = async () => {
  const token = localStorage.getItem('dynamo-token')

  if(!token){
    return null
  }
  
  const response = await api.get<GetMachinesResponse>('/machines', {
    headers: { 
      Authorization: `Bearer ${token}`
    },
  })
  return response.data
}