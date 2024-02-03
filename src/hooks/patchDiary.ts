import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { Diary } from "../types";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";

type patchDiaryInput = Pick<Diary, "emotion" | "weather" | "id" | "contents">;

export const patchDiary = async (newDiary: patchDiaryInput) => {
  console.log(newDiary);

  try {
    const response = await instance.patch<{ result: string }>(
      "diary/edit-diary/" + newDiary.id,
      newDiary,
    );

    return response.data;
  } catch (e) {
    console.error;
  }
};

export const usePatchDiary = (newDiary: Diary) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => patchDiary(newDiary), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPublicDiary"]);
      queryClient.invalidateQueries("getDiary" + newDiary.id);
      navigate(ROUTE.HOME_PAGE.link, { replace: true });
      message.success("다이어리가 수정되었습니다.");
    },
    onError: () => {
      message.error("다이어리 수정에 실패했습니다.");
    },
  });
};
