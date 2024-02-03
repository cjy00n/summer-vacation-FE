import { useMutation } from "react-query";
import { instance } from ".";
import { Gender } from "../types";

interface patchAddUserInfoProps {
  gender: Gender;
  birth: string;
}

export const patchAddUserInfo = async ({
  gender,
  birth,
}: patchAddUserInfoProps) => {
  console.log(gender, birth);

  try {
    const response = await instance.patch<{ result: string }>("users/addInfo", {
      gender,
      birth,
    });

    return response.data;
  } catch (e) {
    console.error;
  }
};
export const usePatchAddUserInfo = (gender: Gender, birth: string) => {
  return useMutation(() => patchAddUserInfo({ gender, birth }));
};
