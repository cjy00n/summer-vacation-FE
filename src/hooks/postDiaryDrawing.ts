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
  console.log(input);
  input += ` weather is ${getEnglishWeather(weather)} and I am ${getEnglishEmotion(emotion)}. by crayon like animation without any text`;

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
