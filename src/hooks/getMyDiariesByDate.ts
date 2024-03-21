// 일기 날짜 최신 순 내 다이어리 GET
import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getMyDiariesByDate = async () => {
  try {
    const response =
      await instance.get<{ diary: Diary; likeCount: number }[]>(
        "/diary/diaryDate",
      );
    if (response.data) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetMyDiariesByDate() {
  return useQuery(["getMyDiariesByDate"], () => getMyDiariesByDate());
}
