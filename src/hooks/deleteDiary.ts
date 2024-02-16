import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes/Route";

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
    onSuccess: () => {
      queryClient.invalidateQueries(["getPublicDiary"]);
      queryClient.invalidateQueries(["getDiary" + targetId]);
      queryClient.invalidateQueries(["getUserInfo"]);
      queryClient.invalidateQueries(["getMyDiaries"]);

      message.success("삭제가 완료되었습니다.");
      navigate(ROUTE.HOME_PAGE.link, { replace: true });
    },
  });
}
