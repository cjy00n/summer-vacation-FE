import { DateType, Emotion, Weather } from ".";

export interface Diary {
  id: string;
  date: Date | DateType;
  weather: Weather;
  emotion: Emotion;
  title: string;
  contents: string;
  imageUrl: string;
  isWrite: 1 | 0;
  isPublic: 1 | 0;
  createdAt: Date;
  likeCount?: number;
}

export interface DiaryLocalstorageType
  extends Pick<
    Diary,
    "date" | "weather" | "emotion" | "contents" | "title" | "isPublic"
  > {
  englishContents: string;
}
