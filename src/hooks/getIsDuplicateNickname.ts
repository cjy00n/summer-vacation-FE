import { useQuery } from "react-query";
import { instance } from ".";
import axios from "axios";

export const getIsDuplicateNickname = async (nickname: string) => {
  try {
    const response = await instance.get(`users/nickname?nickname=${nickname}`);
    return response.data.result === "Available" ? false : true;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response && e.response.status === 400) {
      return true;
    } else {
      console.error(e);
      return true;
    }
  }
};

export function useGetIsDuplicateNickname(nickname: string, checked: boolean) {
  return useQuery(
    ["getIsDuplicateNickname" + nickname],
    () => getIsDuplicateNickname(nickname),
    {
      enabled: !!nickname && checked,
    },
  );
}
