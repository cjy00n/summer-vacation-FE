import { instance } from ".";
import { useMutation } from "react-query";

export const postTokenRefresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const response = await instance.get("users/refresh-token?" + refreshToken);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export const usePostTokenRefresh = () => {
  return useMutation(() => postTokenRefresh());
};
