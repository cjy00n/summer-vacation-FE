import axios from "axios";
import { useQuery } from "react-query";

export const getCheckVaildRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    try {
      const response = await axios.post<{ refreshTokenValid: boolean }>(
        "/api/users/refresh-token?refreshToken=" + refreshToken,
      );

      if (response.data !== undefined) {
        if (!response.data.refreshTokenValid) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }

        return response.data.refreshTokenValid;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  }
};

export const useGetCheckVaildRefreshToken = () => {
  return useQuery(["check-refresh-token"], () => getCheckVaildRefreshToken(), {
    refetchOnWindowFocus: false,
  });
};
