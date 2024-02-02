import { DateType, Emotion, Weather } from ".";

export interface Diary {
  date: Date | DateType;
  weather: Weather;
  emotion: Emotion;
  title: string;
  content: string;
  img: string;
}
