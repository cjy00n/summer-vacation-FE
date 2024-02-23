import { instance } from ".";

interface getRefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const getRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const response = await instance.get<getRefreshTokenResponse>(
      "users/refresh-token?refreshToken=" + refreshToken,
    );
    if (response.data) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
};
