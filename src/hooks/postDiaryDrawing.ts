import { instance } from ".";
import { getEnglishEmotion } from "../assets/data/emotionData";
import { getEnglishWeather } from "../assets/data/weatherData";
import { Emotion, Weather } from "../types";

interface postDiaryDrawingProps {
  input: string;
  emotion: Emotion;
  weather: Weather;
}

export const postDiaryDrawing = async ({
  input,
  emotion,
  weather,
}: postDiaryDrawingProps) => {
  input += `The weather today is ${getEnglishWeather(weather)}, and I feel ${getEnglishEmotion(emotion)}. 
Like a cute and colorful webtoon drawn with crayon without any text`;

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
