import { useQuery } from "react-query";
import { instance } from ".";

const getCheckBookmark = async (id: string) => {
  try {
    const response = await instance.get<boolean>(`bookmark/${id}`);
    if (response.data != undefined) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetCheckBookmark(id: string) {
  return useQuery(["getCheckBookmark" + id], () => getCheckBookmark(id));
}
