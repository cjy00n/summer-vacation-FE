import { useQuery } from "react-query";
import { instance } from ".";
import { Diary } from "../types";

interface MyBookResponse {
  diary: Diary;
}

const getMyBookmark = async () => {
  try {
    const response = await instance.get<MyBookResponse[]>("bookmark");
    if (response.data != undefined) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetMyBookmark() {
  return useQuery(["getMyBookmark"], () => getMyBookmark());
}
