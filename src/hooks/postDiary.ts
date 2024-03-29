import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { Diary } from "../types";
import { message } from "antd";

type PostDrawingType = Omit<Diary, "id" | "createdAt">;

export const postDiary = async (diary: PostDrawingType) => {
  try {
    const formData = new FormData();
    formData.append("title", diary.title);
    formData.append("text", diary.contents);
    formData.append("date", diary.date!.toString());
    formData.append("input", diary.imageUrl);
    formData.append("emotion", diary.emotion);
    formData.append("weather", diary.weather);
    formData.append("isPublic", diary.isPublic!.toString());

    const response = await instance.post<{ result: string }>(
      "diary/create-diary",
      formData,
    );
    return response.data;
  } catch (e) {
    console.error;
  }
};

export function usePostDiary() {
  const queryClient = useQueryClient();
  return useMutation((diary: PostDrawingType) => postDiary(diary), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPublicDiary"]);
      queryClient.invalidateQueries(["getMyDiaries"]);
      queryClient.invalidateQueries(["getMyDiariesByDate"]);
    },
    onError: () => {
      message.error("다이어리 저장에 실패했습니다.");
    },
  });
}
