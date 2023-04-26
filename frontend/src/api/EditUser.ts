import axios from "axios";
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const baseUrl = "http://localhost:5265/api";

export async function PUTUser(data: User, id: number) {
  const { data: response } = await axios.put(`${baseUrl}/User/${id}`, data);
  console.log(response.data);
}
