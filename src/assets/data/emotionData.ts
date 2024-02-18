import { Emotion } from "../../types";

const emotionData: Emotion[] = [
  "괜찮아요",
  "좋아요",
  "기뻐요",
  "화나요",
  "슬퍼요",
];

export const getEnglishEmotion = (emotion: Emotion) => {
  switch (emotion) {
    case "괜찮아요":
      return "so so";
    case "기뻐요":
      return "happy";
    case "슬퍼요":
      return "sad";
    case "좋아요":
      return "great";
    case "화나요":
      return "angry";
  }
};
export default emotionData;
