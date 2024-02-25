import { message } from "antd";
import { instance } from ".";
import { useMutation, useQueryClient } from "react-query";

export const postBookmark = async ({ id }: { id: string }) => {
  try {
    const response = await instance.post<{ message: string }>("bookmark/" + id);
    if (response.data != undefined) {
      return response.data.message;
    }
  } catch (e) {
    console.error(e);
  }
};

export const usePostBookmark = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => postBookmark({ id }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getMyBookmark"]);
    },
    onError: () => {
      message.error("북마크 저장에 실패했습니다.");
    },
  });
};
