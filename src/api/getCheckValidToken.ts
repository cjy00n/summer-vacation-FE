import axios from "axios";
import { useQuery } from "react-query";

export const getCheckVaildToken = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const response = await axios.post<{ accessTokenValid: boolean }>(
        "/api/users/access-token?accessToken=" + accessToken,
      );

      if (response.data !== undefined) {
        return response.data.accessTokenValid;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  }
};

export const useGetCheckVaildToken = () => {
  return useQuery(["check-access-token"], () => getCheckVaildToken(), {
    refetchOnWindowFocus: false,
  });
};
