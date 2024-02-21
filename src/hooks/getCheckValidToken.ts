import axios from "axios";
import { instance } from ".";
import { useQuery } from "react-query";

export const getCheckVaildToken = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const response = await instance.post<boolean | "incorrect format">(
        "users/access-token?accessToken=" + accessToken,
      );

      if (response.data !== undefined) {
        return response.data;
      }
    } catch (e) {
      console.error(e);

      if (axios.isAxiosError(e) && e.response && e.response.status === 500) {
        return "incorrect format";
      } else if (
        axios.isAxiosError(e) &&
        e.response &&
        e.response.status === 400
      ) {
        return false;
      }
    }
  }
};

export const useGetCheckVaildToken = () => {
  return useQuery(["check-access-token"], () => getCheckVaildToken());
};
