import type { Sensor } from '@/components/dashboard/sensor/sensors-table'
import { api } from '@/lib/api'

export interface GetSensorsResponse {
  sensors: Sensor[]
}
export const getSensors = async () => {
  const token = localStorage.getItem('dynamo-token')

  if(!token){
    return null
  }
  
  const response = await api.get<GetSensorsResponse>('/sensors', {
    headers: { 
      Authorization: `Bearer ${token}`
    },
  })
  return response.data
}