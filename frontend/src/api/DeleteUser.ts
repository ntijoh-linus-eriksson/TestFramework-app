import axios from "axios";
const baseUrl = "http://localhost:5265/api";

export async function DeleteUser(id: number) {
  const { data: response } = await axios.delete(`${baseUrl}/User/${id}`);
  return response.data;
}
