import axios from "axios";
import { ROUTE } from "../routes/Route";

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

    console.log(response);
    if (response.data) {
      setIsLoggedIn(true);
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      if (response.data.isNewUser) {
        // 신규 회원이면 온보딩페이지로
        navigate(ROUTE.ONBOARDING_PAGE.link);
      } else {
        // 기존 회원이면 홈페이지로
        navigate(ROUTE.HOME_PAGE.link);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
