import { instance } from ".";
import { Emotion, Weather } from "../types";
import { getEnglishEmotion } from "../assets/data/emotionData";

interface postDiaryDrawingProps {
  input: string;
  emotion: Emotion;
  weather?: Weather;
  gender?: "남자" | "여자";
}

export const postDiaryDrawing = async ({
  input,
  gender,
  emotion,
}: postDiaryDrawingProps) => {
  const originalInput = input.replace(/We /g, "They ");

  const engGender = gender === "남자" ? "He" : "She";
  const engPossessiveCase = gender === "남자" ? "his" : "her";

  input = `${originalInput.replace(/I /g, engGender + " ").replace(/my /g, engPossessiveCase + " ")},${engGender} is a 17 years old. ${engGender} is so ${getEnglishEmotion(emotion)}, Like a an animated webtoons , by a young child, by crayons, pastel-toned colors, bright, only pictures, Never any text, No ugly person`;
  //  Dora the Explorer
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
