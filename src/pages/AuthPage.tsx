import { Link, useNavigate } from "react-router-dom";
import { postKaKaoSignIn } from "../api/postKaKaoSignIn";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";
import { useGetCheckVaildToken } from "../api/getCheckValidToken";
import { useQueryClient } from "react-query";
import { ROUTE } from "../routes/Route";

const AuthPage = () => {
  const navigate = useNavigate();

  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const code = new URL(window.location.href).searchParams.get("code");

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const checkVaildToken = useGetCheckVaildToken();

  const queryClient = useQueryClient();

  if (code && checkVaildToken.data !== true) {
    postKaKaoSignIn({
      code,
      redirectUri: REDIRECT_URI,
      navigate,
      setIsLoggedIn,
    }).then(() => {
      queryClient.invalidateQueries(["getUserInfo"]);
    });
  }

  return (
    <div className="flex max-h-dvh flex-col items-center bg-primary-white pb-[20dvh] pt-[20dvh]">
      <img className="w-44" src="/image/splash1.webp" />
      <img className="mt-[7dvh] w-40" src="/image/splash2.webp" />
      <Link to={KAKAO_AUTH_URI}>
        <button className="mt-[10dvh] flex h-12 w-40 items-center justify-center rounded-[50px] bg-primary-yellow shadow-lg">
          <span className="text-base font-semibold">카카오 로그인</span>
        </button>
      </Link>
      <Link to={ROUTE.HOME_PAGE.link}>
        <button className="mt-[1vh] flex h-12 w-40 items-center justify-center rounded-[50px] bg-primary-orange text-white shadow-lg">
          <span className="text-base font-semibold">홈으로 돌아가기</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthPage;
