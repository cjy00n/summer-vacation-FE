import { DateType, Emotion, Weather } from ".";

export interface Diary {
  id: string;
  date: Date | DateType;
  weather: Weather;
  emotion: Emotion;
  title: string;
  contents: string;
  imageUrl: string;
  isPublic?: 1 | 0;
  createdAt?: Date;
  likeCount?: number;
  userId?: number | string;
}

export interface DiaryDetail {
  diary_id: string;
  diary_title: string;
  diary_contents: string;
  diary_date: Date;
  diary_emotion: Emotion;
  diary_weather: Weather;
  diary_imageUrl: string;
  diary_userId: string;
  totalCount: number;
  likeCount: number;
  괜찮아요?: number;
  기뻐요?: number;
  슬퍼요?: number;
  좋아요?: number;
  화나요?: number;
}

export interface DiaryLocalstorageType
  extends Pick<
    Diary,
    "date" | "weather" | "emotion" | "contents" | "title" | "isPublic"
  > {
  englishContents: string;
}
