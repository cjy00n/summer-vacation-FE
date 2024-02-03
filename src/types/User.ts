import { Diary } from ".";

export interface User {
  id: string;
  kakaoId: string;
  gender: "남자" | "여자" | "";
  birth: string;
  createdAt: Date;
  diaries: Diary[];
}
