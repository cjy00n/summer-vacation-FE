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
  input = ` My feeling is really ${getEnglishEmotion(emotion)}. ${input}
Please draw these like cute colored webtoons with pastel-toned crayons. There shouldn't be anything ugly and scary in the painting.
And it shouldn't have any letters. `;
  if (gender)
    input += `For your information, the main character of the webtoon is myself and a ${gender === "남자" ? " man" : " woman"}`;
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
