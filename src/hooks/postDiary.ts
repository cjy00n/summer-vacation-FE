import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { Diary } from "../types";
import { message } from "antd";

type PostDrawingType = Omit<Diary, "id" | "createdAt">;

export const postDiary = async (diary: PostDrawingType) => {
  try {
    console.log(diary);
    const response = await instance.post<{ result: string }>(
      "diary/create-diary",
      { ...diary, text: diary.contents, imageUrl: diary.image },
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
    },
    onError: () => {
      message.error("다이어리 저장에 실패했습니다.");
    },
  });
}
