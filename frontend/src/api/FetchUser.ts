import { useQuery } from "react-query";
import { ShowUser } from "../pages/user/ShowUsers";

const baseUrl = "http://localhost:5265/api";

async function GetUsers(): Promise<ShowUser[]> {
  const res = await fetch(`${baseUrl}/User`);
  return res.json();
}

export function FetchUsers(): ShowUser[] {
  const { data, status } = useQuery("users", GetUsers);

  if (status === "success") {
    return data;
  } else {
    return [];
  }
}
