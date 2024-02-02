import { useMutation } from "react-query";
import { instance } from ".";

export const usePostDiaryDrawing = () => {
  const mutation = useMutation(async (input: string) => {
    const response = await instance.post<{ imageUrl: string }>(
      "diary/generate-image",
      {
        input: input,
      },
    );
    return response.data.imageUrl;
  });

  return mutation;
};
