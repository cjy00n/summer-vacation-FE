import { instance } from ".";
import { useMutation } from "react-query";

export const postUserWithdrawal = async () => {
  try {
    const response = await instance.post("/users/unlink");
    console.log(response.data);

    if (response.data) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  } catch (e) {
    console.error(e);
  }
};

export const usePostUserWithdrawal = () => {
  return useMutation(() => postUserWithdrawal(), {});
};
