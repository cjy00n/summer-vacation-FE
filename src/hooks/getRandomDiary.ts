import axios from "axios";

export const getRandomDiaryId = async () => {
  try {
    const response = await axios.get<{ diary_id: string }>(`/api/diary/random`);
    if (response.data) {
      return response.data.diary_id;
    }
  } catch (e) {
    console.error;
  }
};
