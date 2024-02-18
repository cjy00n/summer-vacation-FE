import { instance } from ".";
import { useMutation } from "react-query";

interface DiaryTranslationResponse {
  message: {
    result: {
      srcLangType: "ko";
      tarLangTyle: "en";
      translatedText: string;
    };
  };
}

export const postDiaryTranslation = async (input: string) => {
  try {
    const response = await instance.post<DiaryTranslationResponse>(
      "/diary/translation-text",
      { input },
    );

    return response.data.message.result.translatedText;
  } catch (e) {
    console.error(e);
  }
};

export const usePostDiaryTranslation = (input: string) => {
  return useMutation(() => postDiaryTranslation(input));
};
