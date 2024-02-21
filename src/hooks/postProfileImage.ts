import { message } from "antd";
import { instance } from ".";
import { useMutation } from "react-query";

export const postProfileImage = async (imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("imageFile", imageFile);

    const response = await instance.post("users/profile-image", formData);
    if (response.data) {
      if (response.status === 201) {
        message.success("프로필 사진이 변경되었습니다.");
      }
      return response.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export const usePostProfileImage = () => {
  return useMutation((imageFile: File) => postProfileImage(imageFile));
};
