import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { Diary } from "../types";
import { message } from "antd";

type PostDrawingType = Omit<Diary, "id" | "createdAt">;

export const postDiary = async (diary: PostDrawingType) => {
  try {
    console.log(diary);

    const formData = new FormData();
    formData.append("title", diary.title);
    formData.append("text", diary.contents);
    formData.append("date", diary.date!.toString());
    formData.append("input", diary.image);
    formData.append("emotion", diary.emotion);
    formData.append("weather", diary.weather);
    formData.append("isPublic", diary.isPublic.toString());
    formData.append("isWirte", diary.isWrite.toString());

    const response = await instance.post<{ result: string }>(
      "diary/create-diary",
      formData,
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error;
  }
};

export function usePostDiary(diary: PostDrawingType) {
  const queryClient = useQueryClient();
  return useMutation(() => postDiary(diary), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPublicDiary"]);
      queryClient.invalidateQueries(["getUserInfo"]);
      queryClient.invalidateQueries(["getMyDiaries"]);
    },
    onError: () => {
      message.error("다이어리 저장에 실패했습니다.");
    },
  });
}
