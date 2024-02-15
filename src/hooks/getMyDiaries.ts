import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getMyDiaries = async () => {
  try {
    const response = await instance.get<Diary[]>("/diary/diaries");
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetMyDiaries() {
  return useQuery(["getMyDiaries"], () => getMyDiaries());
}
