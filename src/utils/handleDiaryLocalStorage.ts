import { DiaryLocalstorageType } from "../types";

const clearDiaryLocalStorage = () => {
  localStorage.removeItem("diary-contents");
  localStorage.removeItem("diary-title");
  localStorage.removeItem("diary-emotion");
  localStorage.removeItem("diary-weather");
  localStorage.removeItem("diary-date");
  localStorage.removeItem("diary-isPublic");
};

const getDiaryLocalStorage = () => {
  const existingData = {
    existingContents: localStorage.getItem("diary-contents"),
    existingTitle: localStorage.getItem("diary-title"),
    existingWeather: localStorage.getItem("diary-weather"),
    existingEmotion: localStorage.getItem("diary-emotion"),
    existingDate: localStorage.getItem("diary-date"),
    existingisPublic: localStorage.getItem("diary-isPublic"),
  };

  const {
    existingContents,
    existingTitle,
    existingWeather,
    existingEmotion,
    existingDate,
    existingisPublic,
  } = existingData;

  const data: DiaryLocalstorageType = {
    contents: existingContents ? JSON.parse(existingContents) : null,
    title: existingTitle ? JSON.parse(existingTitle) : null,
    weather: existingWeather ? JSON.parse(existingWeather) : null,
    emotion: existingEmotion ? JSON.parse(existingEmotion) : null,
    date: existingDate ? new Date(JSON.parse(existingDate)) : null,
    isPublic: existingisPublic === "0" ? 0 : 1,
  };
  return data;
};

const setDiaryLocalStorage = ({
  contents,
  title,
  emotion,
  weather,
  date,
  isPublic,
}: DiaryLocalstorageType) => {
  localStorage.setItem("diary-contents", JSON.stringify(contents));
  localStorage.setItem("diary-title", JSON.stringify(title));
  localStorage.setItem("diary-emotion", JSON.stringify(emotion));
  localStorage.setItem("diary-weather", JSON.stringify(weather));
  localStorage.setItem("diary-date", JSON.stringify(date));
  localStorage.setItem("diary-isPublic", JSON.stringify(isPublic));
};

export { clearDiaryLocalStorage, getDiaryLocalStorage, setDiaryLocalStorage };
