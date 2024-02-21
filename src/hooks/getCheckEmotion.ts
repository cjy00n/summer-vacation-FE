import { useQuery } from "react-query";
import { instance } from ".";

interface checkEmotionResponse {
  좋아요: boolean;
  괜찮아요: boolean;
  슬퍼요: boolean;
  화나요: boolean;
  기뻐요: boolean;
}

const getCheckEmotion = async (id: string) => {
  try {
    const response = await instance.get<checkEmotionResponse>(`emotion/${id}`);
    console.log(response.data);
    if (response.data != undefined) {
      const { 좋아요, 괜찮아요, 슬퍼요, 화나요, 기뻐요 } = response.data;
      return 좋아요
        ? "좋아요"
        : 괜찮아요
          ? "괜찮아요"
          : 슬퍼요
            ? "슬퍼요"
            : 화나요
              ? "화나요"
              : 기뻐요
                ? "기뻐요"
                : undefined;
    }
  } catch (e) {
    console.error;
  }
};

export function useGetCheckEmotion(id: string) {
  return useQuery(["getCheckEmotion" + id], () => getCheckEmotion(id));
}
