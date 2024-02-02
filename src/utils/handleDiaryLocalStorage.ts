import { DiaryLocalstorageType } from "../types";

const clearDiaryLocalStorage = () => {
  localStorage.removeItem("diary-data");
};

const getDiaryLocalStorage = () => {
  const existingData = localStorage.getItem("diary-data");
  return existingData ? JSON.parse(existingData) : null;
};

const setDiaryLocalStorage = (diaryData: DiaryLocalstorageType) => {
  localStorage.setItem("diary-data", JSON.stringify(diaryData));
};

export { clearDiaryLocalStorage, getDiaryLocalStorage, setDiaryLocalStorage };
