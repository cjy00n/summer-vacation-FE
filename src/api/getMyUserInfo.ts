import { useQuery } from "react-query";
import { instance } from ".";
import { User } from "../types";

export const getUserInfo = async () => {
  try {
    const response = await instance.get<User>(`/users/me`);
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetUserInfo() {
  return useQuery(["getUserInfo"], () => getUserInfo());
}
