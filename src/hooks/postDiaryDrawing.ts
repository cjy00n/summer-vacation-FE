import { instance } from ".";
import { getEnglishEmotion } from "../assets/data/emotionData";
import { getEnglishWeather } from "../assets/data/weatherData";
import { Emotion, Weather } from "../types";

interface postDiaryDrawingProps {
  input: string;
  emotion: Emotion;
  weather: Weather;
  gender: "남자" | "여자";
}

export const postDiaryDrawing = async ({
  input,
  emotion,
  weather,
  gender = "남자",
}: postDiaryDrawingProps) => {
  input = `The weather today is ${getEnglishWeather(weather)}, and I feel ${getEnglishEmotion(emotion)}. ${input} I am a ${gender === "남자" ? "male" : "female"} person. Please Drawing by crayon like cute cartoon colorful without any text`;

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
