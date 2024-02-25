import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

export const getPublicDiary = async (page = 1, pageSize = 12) => {
  try {
    const response = await instance.get<{ diary: Diary; totalCount: number }[]>(
      `diary/get-diaries/1?page=${page}&pageSize=${pageSize}`,
    );
    if (response.data) {
      return response.data;
    }
  } catch (e) {
    console.error;
  }
};

export function useGetPublicDiary(page?: number, pageSize?: number) {
  return useQuery(["getPublicDiary"], () => getPublicDiary(page, pageSize));
}
