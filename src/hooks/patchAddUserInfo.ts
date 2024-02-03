import { useMutation } from "react-query";
import { instance } from ".";
import { Gender } from "../types";

interface PatchAddUserInfoProps {
  gender: Gender;
  birth: string;
}

export const patchAddUserInfo = async ({
  gender,
  birth,
}: PatchAddUserInfoProps): Promise<string> => {
  console.log(gender, birth);

  try {
    const response = await instance.patch("users/addInfo", {
      gender,
      birth,
    });

    return response.data;
  } catch (e) {
    console.error;
    throw new Error("Failed to patch user info");
  }
};
export const usePatchAddUserInfo = () => {
  return useMutation((data: PatchAddUserInfoProps) => patchAddUserInfo(data));
};
