import { instance } from ".";
import { Diary } from "../types";

type patchDiaryInput = Pick<Diary, "emotion" | "weather" | "id" | "contents">;

export const patchDiary = async (newDiary: patchDiaryInput) => {
  console.log(newDiary);

  try {
    const response = await instance.patch<{ result: string }>(
      "diary/generate-image",
      newDiary,
    );

    return response.data;
  } catch (e) {
    console.error;
  }
};
