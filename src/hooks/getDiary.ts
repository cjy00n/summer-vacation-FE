import { useQuery } from "react-query";
import { DiaryDetail } from "../types";
import axios from "axios";

const getDiary = async (targetId: string) => {
  try {
    const response = await axios.get<DiaryDetail>(
      `/api/diary/get-diary/${targetId}`,
    );

    if (response.data) return { ...response.data, contents: response.data };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export function useGetDiary(targetId: string) {
  return useQuery(["getDiary" + targetId], () => getDiary(targetId), {
    retry: false,
  });
}
