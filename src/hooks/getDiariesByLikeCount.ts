import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

const getDiariesByLikeCount = async () => {
  try {
    const response = await instance.get<Diary[]>("like");
    return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetDiariesByLikeCount() {
  return useQuery(["getDiariesByLikeCount"], () => getDiariesByLikeCount());
}
