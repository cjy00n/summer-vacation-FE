import { useQuery } from "react-query";
import { instance } from ".";

const getCheckEmotion = async (id: string) => {
  try {
    const response = await instance.get<boolean>(`emotion/${id}`);
    console.log(response.data);
    if (response.data != undefined) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetCheckEmotion(id: string) {
  return useQuery(["getCheckEmotion" + id], () => getCheckEmotion(id));
}
