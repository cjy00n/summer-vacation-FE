import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { Emotion, Weather } from "../types";
import { message } from "antd";

interface patchDiaryInputProps {
  title?: string;
  emotion?: Emotion;
  weather?: Weather;
  id: string;
  contents?: string;
  isPublic?: 1 | 0;
}

export const patchDiary = async (newDiary: patchDiaryInputProps) => {
  try {
    const requestBody = {
      ...newDiary,
      ...(newDiary.contents ? { text: newDiary.contents } : {}),
    };

    const response = await instance.patch<{ result: string }>(
      "diary/edit-diary/" + newDiary.id,
      requestBody,
    );

    return response.data;
  } catch (e) {
    console.error;
  }
};

export const usePatchDiary = (newDiary: patchDiaryInputProps) => {
  const queryClient = useQueryClient();

  return useMutation(() => patchDiary(newDiary!), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPublicDiary"]);
      queryClient.invalidateQueries(["getDiary"] + newDiary!.id);
      queryClient.invalidateQueries(["getMyDiaries"]);

      message.success("다이어리가 수정되었습니다.");
    },
    onError: () => {
      message.error("다이어리 수정에 실패했습니다.");
    },
  });
};
