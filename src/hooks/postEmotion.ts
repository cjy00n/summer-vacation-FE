import { instance } from ".";
import { useMutation, useQueryClient } from "react-query";
import { Emotion } from "../types";

interface postEmotionProps {
  emotion: Emotion;
  id: string;
}

export const postEmotion = async ({ emotion, id }: postEmotionProps) => {
  try {
    const response = await instance.post("/emotion/" + id, { emotion });
    return response.data.message;
  } catch (e) {
    console.error(e);
  }
};

export const usePostEmotion = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation((emotion: Emotion) => postEmotion({ id, emotion }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getDiary"] + id);
      queryClient.invalidateQueries(["getCheckEmotion" + id]);
      queryClient.invalidateQueries(["getPublicDiary"]);
    },
  });
};
