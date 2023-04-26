import { useQuery } from "react-query";
import { User } from "./CreateUser";

const baseUrl = "http://localhost:5265/api";

async function GetUsers(): Promise<User[]> {
  const res = await fetch(`${baseUrl}/User`);
  return res.json();
}

export function FetchUsers(): User[] {
  const { data, status } = useQuery("users", GetUsers);

  if (status === "success") {
    return data;
  } else {
    return [];
  }
}
