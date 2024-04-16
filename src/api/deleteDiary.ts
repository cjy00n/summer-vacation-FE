import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const deleteDiary = async (targetId: string) => {
  try {
    const response = await instance.delete<{ result: string }>(
      "diary/delete-diary/" + targetId,
    );

    return response.data;
  } catch (e) {
    console.error;
  }
};

export function useDeleteDiary(targetId: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(() => deleteDiary(targetId), {
    onSuccess: async () => {
      message.success("삭제가 완료되었습니다.");
      await Promise.all([
        queryClient.invalidateQueries(["getPublicDiary"]),
        queryClient.invalidateQueries(["getDiary" + targetId]),
        queryClient.invalidateQueries(["getMyDiariesByDate"]),
        queryClient.invalidateQueries(["getMyDiaries"]),
      ]);

      navigate(-1);
    },
  });
}
