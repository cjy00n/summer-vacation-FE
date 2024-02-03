import { instance } from ".";
import { Diary } from "../types";

type PostDrawingType = Omit<Diary, "id" | "createdAt">;

export const postDiary = async (dairy: PostDrawingType) => {
  try {
    console.log(dairy);
    const response = await instance.post<{ imageUrl: string }>(
      "diary/create-diary",
      dairy,
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error;
  }
};
