import { instance } from ".";
import { useMutation } from "react-query";

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
  return useMutation(() => postBookmark({ id }));
};
