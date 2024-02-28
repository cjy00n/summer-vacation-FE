import { instance } from ".";
import { getEnglishEmotion } from "../assets/data/emotionData";
import { getEnglishWeather } from "../assets/data/weatherData";
import { Emotion, Weather } from "../types";

interface postDiaryDrawingProps {
  input: string;
  emotion: Emotion;
  weather: Weather;
  gender?: "남자" | "여자";
}

export const postDiaryDrawing = async ({
  input,
  emotion,
  weather,
  gender,
}: postDiaryDrawingProps) => {
  input = `The weather today is ${getEnglishWeather(weather)}, and My feeling is so ${getEnglishEmotion(emotion)}. ${input}
Like a cute and colorful but simple webtoon drawn with crayon without ugly things and any text `;
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
