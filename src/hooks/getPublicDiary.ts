import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getPublicDiary = async (page = 1) => {
  try {
    const response = await instance.get<{ diary: Diary; totalCount: number }[]>(
      `diary/get-diaries/1?page=${page}&pageSize=10`,
    );
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetPublicDiary(page?: number) {
  return useQuery(["getPublicDiary"], () => getPublicDiary(page));
}
