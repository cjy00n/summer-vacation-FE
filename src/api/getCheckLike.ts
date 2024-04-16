import { useQuery } from "react-query";
import { instance } from ".";

const getCheckLike = async (id: string) => {
  try {
    const response = await instance.get<"possible" | "alread checked">(
      `like/${id}`,
    );
    if (response.data != undefined) return response.data;
  } catch (e) {
    console.error;
  }
};

export function useGetCheckLike(id: string) {
  return useQuery(["getCheckLike" + id], () => getCheckLike(id));
}
