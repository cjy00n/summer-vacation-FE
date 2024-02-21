import { Link, useNavigate } from "react-router-dom";
import { postKaKaoSignIn } from "../hooks/postKaKaoSignIn";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";
import { useGetCheckVaildToken } from "../hooks/getCheckValidToken";
const AuthPage = () => {
  const navigate = useNavigate();

  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const code = new URL(window.location.href).searchParams.get("code");

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const checkVaildToken = useGetCheckVaildToken();

  console.log("code", code);
  console.log("checkVaildToken", checkVaildToken);
  if (code && checkVaildToken.data !== true)
    postKaKaoSignIn({
      code,
      redirectUri: REDIRECT_URI,
      navigate,
      setIsLoggedIn,
    });

  return (
    <div className="scrollbar-hide flex h-[100vh] flex-col items-center overflow-y-scroll bg-primary-white pb-[20vh] pt-[20vh]">
      <img className="w-44" src="/image/splash1.png" />
      <img className="mt-[7vh] w-28" src="/image/splash2.png" />
      <Link to={KAKAO_AUTH_URI}>
        <button className="mt-[20vh] flex h-12 w-40 items-center justify-center rounded-[50px] bg-primary-yellow shadow-lg">
          <span className="text-base font-semibold">카카오 로그인</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthPage;
