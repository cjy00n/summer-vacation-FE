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
Please draw these like webtoons drawn with pastel-toned crayons. There shouldn't be anything ugly and scary in the painting.
And it shouldn't have any letters. `;
  if (gender)
    input += `FYI, I am a ${gender === "남자" ? " man" : " woman"}. Please don't draw the face in the painting in a weird way`;
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
