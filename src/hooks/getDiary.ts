import { useQuery } from "react-query";
import { instance } from ".";
import { DiaryDetail } from "../types";

const getDiary = async (targetId: string) => {
  try {
    const response = await instance.get<DiaryDetail>(
      `diary/get-diary/${targetId}`,
    );
    if (response.data) return { ...response.data, contents: response.data };
  } catch (e) {
    console.error;
  }
};

export function useGetDiary(targetId: string) {
  return useQuery(["getDiary" + targetId], () => getDiary(targetId));
}
