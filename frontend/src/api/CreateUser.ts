import axios from "axios";
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const baseUrl = "http://localhost:5265/api";

export async function PostUser(data: User) {
  const { data: response } = await axios.post(`${baseUrl}/User`, data);
  return response.data;
}
