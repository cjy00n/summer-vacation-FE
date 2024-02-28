import { useMutation, useQueryClient } from "react-query";
import { instance } from ".";
import { Gender } from "../types";
import { message } from "antd";

interface PatchAddUserInfoProps {
  gender?: Gender;
  birth?: string;
  nickname?: string;
}

export const patchAddUserInfo = async ({
  gender,
  birth,
  nickname,
}: PatchAddUserInfoProps): Promise<string> => {
  try {
    const response = await instance.patch("users/addInfo", {
      gender,
      birth,
      nickname,
    });

    return response.data;
  } catch (e) {
    console.error;
    throw new Error("Failed to patch user info");
  }
};
export const usePatchAddUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: PatchAddUserInfoProps) => patchAddUserInfo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getUserInfo"]);
    },
    onError: () => {
      message.error("사용자 정보 수정에 실패했습니다.");
    },
  });
};
