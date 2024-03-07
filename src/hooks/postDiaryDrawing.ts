import { instance } from ".";
import { Emotion, Weather } from "../types";

interface postDiaryDrawingProps {
  input: string;
  emotion: Emotion;
  weather?: Weather;
  gender?: "남자" | "여자";
}

export const postDiaryDrawing = async ({
  input,
  gender,
}: postDiaryDrawingProps) => {
  const originalInput = input.replace(/We /g, "They ");

  const engGender = gender === "남자" ? "He" : "She";

  input = `${originalInput.replace(/I /g, engGender + " ")} ${engGender} is 16 to 30 years old, Like an animated webtoons, pastel-toned colors, No any letter, No ugly, `;
  console.log(input);
  try {
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
