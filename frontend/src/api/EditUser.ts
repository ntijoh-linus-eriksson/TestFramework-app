import axios from 'axios'
export interface PutUser {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
}
const baseUrl = 'http://localhost:5265/api'

export async function PUTUser(data: PutUser, id: number) {
  console.log(data, id)
  const { data: response } = await axios.put(`${baseUrl}/User/${id}`, data)
  console.log(response.data)
}
