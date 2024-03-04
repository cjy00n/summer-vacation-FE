import { message } from "antd";
import { instance } from ".";
import { useMutation, useQueryClient } from "react-query";

export const postUserWithdrawal = async () => {
  try {
    const response = await instance.post("/users/unlink");

    if (response.data) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  } catch (e) {
    console.error(e);
  }
};

export const usePostUserWithdrawal = () => {
  const queryClient = useQueryClient();

  return useMutation(() => postUserWithdrawal(), {
    onSuccess: () => {
      message.success("회원탈퇴 되었습니다.");
      queryClient.invalidateQueries(["getUserInfo"]);
      queryClient.invalidateQueries(["getMyDiaries"]);
    },
  });
};
