import { instance } from ".";
import { useMutation } from "react-query";

export const postUserWithdrawal = async () => {
  try {
    const response = await instance.post("/users/unlink");
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const usePostUserWithdrawal = () => {
  return useMutation(() => postUserWithdrawal(), {});
};
