import { useQuery } from "react-query";
import { instance } from ".";
import { User } from "../types";

const getUserInfo = async () => {
  try {
    const response = await instance.get<User>(`/users/me`);
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetUserInfo() {
  const accessToken = localStorage.getItem("accessToken");
  return useQuery(["getUserInfo", accessToken], () => getUserInfo());
}
