import { instance } from ".";
import { getEnglishEmotion } from "../assets/data/emotionData";
import { Emotion, Weather } from "../types";

interface postDiaryDrawingProps {
  input: string;
  emotion: Emotion;
  weather?: Weather;
  gender?: "남자" | "여자";
}

export const postDiaryDrawing = async ({
  input,
  emotion,
  gender,
}: postDiaryDrawingProps) => {
  input = `Story is that ${input}, In webtoons pastel-toned colors, No letters, No ugly, `;
  if (gender)
    input += `${gender === "남자" ? "man, his" : "woman, her"} emotion is so ${getEnglishEmotion(emotion)}  
    `;
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
