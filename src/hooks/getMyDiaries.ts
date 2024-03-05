import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getMyDiaries = async () => {
  try {
    const response =
      await instance.get<{ diary: Diary; likeCount: number }[]>(
        "/diary/diaries",
      );
    if (response.data) return response.data.reverse();
  } catch (e) {
    console.error;
  }
};

export function useGetMyDiaries() {
  return useQuery(["getMyDiaries"], () => getMyDiaries());
}
