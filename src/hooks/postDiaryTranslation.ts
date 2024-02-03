import { instance } from ".";
import { useMutation } from "react-query";
import { Emotion, Weather } from "../types";

interface DiaryTranslationResponse {
  message: {
    result: {
      srcLangType: "ko";
      tarLangTyle: "en";
      translatedText: string;
    };
  };
}

export const postDiaryTranslation = async ({
  input,
  weather,
  emotion,
}: {
  input: string;
  weather: Weather;
  emotion: Emotion;
}) => {
  const addConditionInput = `${weather} and ${emotion}\n` + input + "\n";
  try {
    const response = await instance.post<DiaryTranslationResponse>(
      "/diary/translation-text",
      { input: addConditionInput },
    );

    return response.data.message.result.translatedText;
  } catch (e) {
    console.error(e);
  }
};

export const usePostDiaryTranslation = (
  input: string,
  weather: Weather,
  emotion: Emotion,
) => {
  return useMutation(() => postDiaryTranslation({ input, weather, emotion }));
};
