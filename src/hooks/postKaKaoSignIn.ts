import { instance } from ".";
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
    const response = await instance.post<SignInResponse>(
      "/users/sign-in/kakao",
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
        navigate(ROUTE.ONBOARDING_PAGE.link);
      } else {
        navigate(ROUTE.ONBOARDING_PAGE.link);
        // navigate(ROUTE.HOME_PAGE.link);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
