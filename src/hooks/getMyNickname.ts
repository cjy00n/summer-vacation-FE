import { useQuery } from "react-query";
import { instance } from ".";

const getMyNickname = async () => {
  try {
    const response = await instance.get<string>("/users");
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetMyNickname() {
  return useQuery(["getMyNickname"], () => getMyNickname());
}
