import { DateType, Emotion, Weather } from ".";

export interface Diary {
  id: string;
  date: Date | DateType;
  weather: Weather;
  emotion: Emotion;
  title: string;
  contents: string;
  image: string;
  isWrite: 1 | 0;
  isPublic: 1 | 0;
  createdAt: Date;
}

export type DiaryLocalstorageType = Pick<
  Diary,
  "date" | "weather" | "emotion" | "contents" | "title" | "isPublic"
>;
