import { DateType, Emotion, Weather } from "../types";

interface DiaryLocalStrage {
  title: string;
  content: string;
  emotion: Emotion;
  weather: Weather;
  date: Date | DateType;
}

const clearDiaryLocalStorage = () => {
  localStorage.removeItem("diary-content");
  localStorage.removeItem("diary-title");
  localStorage.removeItem("diary-emotion");
  localStorage.removeItem("diary-weather");
  localStorage.removeItem("diary-date");
};

const getDiaryLocalStorage = () => {
  const existingData = {
    existingContent: localStorage.getItem("diary-content"),
    existingTitle: localStorage.getItem("diary-title"),
    existingWeather: localStorage.getItem("diary-weather"),
    existingEmotion: localStorage.getItem("diary-emotion"),
    existingDate: localStorage.getItem("diary-date"),
  };

  const {
    existingContent,
    existingTitle,
    existingWeather,
    existingEmotion,
    existingDate,
  } = existingData;

  return {
    content: existingContent ? JSON.parse(existingContent) : null,
    title: existingTitle ? JSON.parse(existingTitle) : null,
    weather: existingWeather ? JSON.parse(existingWeather) : null,
    emotion: existingEmotion ? JSON.parse(existingEmotion) : null,
    date: existingDate ? new Date(JSON.parse(existingDate)) : null,
  };
};

const setDiaryLocalStorage = ({
  content,
  title,
  emotion,
  weather,
  date,
}: DiaryLocalStrage) => {
  localStorage.setItem("diary-content", JSON.stringify(content));
  localStorage.setItem("diary-title", JSON.stringify(title));
  localStorage.setItem("diary-emotion", JSON.stringify(emotion));
  localStorage.setItem("diary-weather", JSON.stringify(weather));
  localStorage.setItem("diary-date", JSON.stringify(date));
};

export { clearDiaryLocalStorage, getDiaryLocalStorage, setDiaryLocalStorage };
