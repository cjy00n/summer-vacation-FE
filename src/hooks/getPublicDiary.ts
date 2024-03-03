import { useQuery } from "react-query";
import { Diary } from "../types";
import axios from "axios";

export const getPublicDiary = async (page = 1, pageSize = 12) => {
  try {
    const response = await axios.get<{ diary: Diary; totalCount: number }[]>(
      `api/diary/get-diaries/1?page=${page}&pageSize=${pageSize}`,
    );
    if (response.data) {
      return response.data;
    }
  } catch (e) {
    console.error;
  }
};

export function useGetPublicDiary(page?: number, pageSize?: number) {
  return useQuery(["getPublicDiary", page], () =>
    getPublicDiary(page, pageSize),
  );
}
