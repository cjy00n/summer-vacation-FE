import { instance } from ".";

export const postDiaryDrawing = async (input: string) => {
  console.log(input);
  input = input + "\nby crayon like animation";
  try {
    console.log(input);
    const response = await instance.post<{ imageUrl: string }>(
      "diary/generate-image",
      {
        input: input,
      },
    );

    return response.data.imageUrl;
  } catch (e) {
    console.error;
  }
};
