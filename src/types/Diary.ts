import { DateType, Emotion, Weather } from ".";

export interface Diary {
  id: string;
  date: Date | DateType;
  weather: Weather;
  emotion: Emotion;
  title: string;
  contents: string;
  imageUrl: string;
  isPublic: 1 | 0;
  createdAt: Date;
  likeCount?: number;
  userId?: number | string;
}

export interface DiaryLocalstorageType
  extends Pick<
    Diary,
    "date" | "weather" | "emotion" | "contents" | "title" | "isPublic"
  > {
  englishContents: string;
}
