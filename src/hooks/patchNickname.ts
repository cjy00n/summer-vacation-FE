import { useMutation } from "react-query";
import { instance } from ".";

export const patchNickname = async (nickname: string): Promise<string> => {
  console.log(nickname);
  try {
    const response = await instance.patch(`users/${nickname}`);

    return response.data;
  } catch (e) {
    console.error;
    throw new Error("Failed to patch user info");
  }
};
export const usePatchNickname = (nickname: string) => {
  return useMutation(() => patchNickname(nickname));
};
