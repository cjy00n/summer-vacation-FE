import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getDiary = async (targetId: string) => {
  try {
    const response = await instance.get<Diary>(`diary/get-diary/${targetId}`);
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetDiary(targetId: string) {
  return useQuery(["getDiary" + targetId], () => getDiary(targetId));
}
