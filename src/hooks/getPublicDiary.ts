import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getPublicDiary = async () => {
  try {
    const response = await instance.get<Diary[]>(`diary/get-diaries?type=1`);

    return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetPublicDiary() {
  return useQuery(["getPublicDiary"], () => getPublicDiary());
}
