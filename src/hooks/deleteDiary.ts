import { instance } from ".";

export const patchDiary = async (targetId: string) => {
  console.log(targetId);

  try {
    const response = await instance.patch<{ result: string }>(
      "diary/generate-image/" + targetId,
    );

    return response.data;
  } catch (e) {
    console.error;
  }
};
