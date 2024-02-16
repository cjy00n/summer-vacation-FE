import { instance } from ".";
import { useMutation, useQueryClient } from "react-query";

export const postLike = async ({ id }: { id: string }) => {
  try {
    const response = await instance.post("/like/" + id);
    return response.data.message;
  } catch (e) {
    console.error(e);
  }
};

export const usePostLike = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => postLike({ id }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getDiary"] + id);
      queryClient.invalidateQueries(["getDiariesByLikeCount"]);
      queryClient.invalidateQueries(["getPublicDiary"]);
    },
  });
};
