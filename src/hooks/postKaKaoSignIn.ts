import { message } from "antd";
import { instance } from ".";
import { ROUTE } from "../routes/Route";

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export const postKaKaoSignIn = async (
  code: string,
  redirectUri: string,
  navigate: (path: string) => void,
) => {
  try {
    const response = await instance.post<SignInResponse>(
      "/users/sign-in/kakao",
      {
        code: code,
        redirectUri: redirectUri,
      },
    );
    console.log(response.data);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    navigate(ROUTE.ONBOARDING_PAGE.link);
  } catch (e) {
    console.error(e);
    message.error("로그인에 실패했습니다.");
  }
};
