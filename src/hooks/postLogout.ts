import { message } from "antd";
import { useMutation, useQueryClient } from "react-query";

export const postLogout = async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const usePostLogout = () => {
  const queryClient = useQueryClient();

  return useMutation(() => postLogout(), {
    onSuccess: () => {
      message.success("로그아웃 되었습니다.");
      queryClient.invalidateQueries(["getUserInfo"]);
      queryClient.invalidateQueries(["getMyDiaries"]);
    },
  });
};
