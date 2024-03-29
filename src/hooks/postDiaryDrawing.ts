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

  input = `${originalInput.replace(/I /g, engGender + " ").replace(/my /g, engPossessiveCase + " ")}. ${engGender} feels so ${getEnglishEmotion(emotion)}, ${engGender} is 16 to 30 years old, Like an animated webtoons, bright-colored pastel-toned colors, by a young child, by crayons, bright, only pictures, like animation, Never any text, No ugly person`;

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
