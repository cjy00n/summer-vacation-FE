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
  input = ` My feeling is so ${getEnglishEmotion(emotion)}. ${input}
Like a cute and colorful but simple webtoon drawn with Crayons in pastel tones without ugly and scary things and any text `;
  if (gender)
    input += `FYI, I am a ${gender === "남자" ? "man person" : "woman person"}`;
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
