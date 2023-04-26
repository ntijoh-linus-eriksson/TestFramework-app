import { useQuery } from "react-query";

const baseUrl = "http://localhost:5265/api";

async function GetUsers() {
  const res = await fetch(`${baseUrl}/User`);
  console.log(res);
  return res.json;
}

export function FetchUsers() {
  const { data, status } = useQuery("users", GetUsers);

  if (status === "success") {
    return data;
  }
}
