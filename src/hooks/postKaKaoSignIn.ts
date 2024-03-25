import axios from "axios";
import { ROUTE } from "../routes/Route";
import { getUserInfo } from "./getMyUserInfo";

interface postKaKaoSignInProps {
  code: string;
  redirectUri: string;
  navigate: (path: string) => void;
  setIsLoggedIn: (value: boolean) => void;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  isNewUser: boolean;
}

export const postKaKaoSignIn = async ({
  code,
  redirectUri,
  navigate,
  setIsLoggedIn,
}: postKaKaoSignInProps) => {
  try {
    const response = await axios.post<SignInResponse>(
      "api/users/sign-in/kakao",
      {
        code: code,
        redirectUri: redirectUri,
      },
    );

    if (response.data) {
      setIsLoggedIn(true);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      if (response.data.isNewUser) {
        // 신규 회원이면 온보딩페이지로
        navigate(ROUTE.ONBOARDING_PAGE.link);
      } else {
        // 기존 회원이면 GA에 유저정보 push 후 홈페이지로
        pushUserDataLayer();
        navigate(ROUTE.HOME_PAGE.link);
      }
      return response.data.isNewUser;
    }
  } catch (e) {
    console.error(e);
  }
};

const pushUserDataLayer = async () => {
  const userInfo = await getUserInfo();
  try {
    if (userInfo) {
      console.log(userInfo);
      window.dataLayer.push({
        event: "login",
        userId: userInfo.id,
        gender: userInfo.gender,
        birth: parseInt(userInfo.birth),
      });
    }
  } catch (e) {
    console.error(e);
  }
};
