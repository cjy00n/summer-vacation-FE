import { Link, useNavigate } from "react-router-dom";
import { postKaKaoSignIn } from "../hooks/postKaKaoSignIn";
import { useEffect } from "react";
import { ROUTE } from "../routes/Route";

const AuthPage = () => {
  const navigate = useNavigate();

  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const code = new URL(window.location.href).searchParams.get("code");

  console.log("code", code);
  if (code) postKaKaoSignIn(code, REDIRECT_URI, navigate);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      navigate(ROUTE.HOME_PAGE.link);
    }
  }, [navigate]);

  return (
    <div className="flex h-[100vh] flex-col items-center bg-primary-white pb-[20vh] pt-[20vh]">
      <img className="w-44" src="/image/splash1.png" />
      <img className="mt-[7vh] w-28" src="/image/splash2.png" />
      <Link to={KAKAO_AUTH_URI}>
        <button className="mt-[25vh] flex h-12 w-40 items-center justify-center rounded-[50px] bg-primary-yellow shadow-lg">
          <span className="text-base font-semibold">카카오 로그인</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthPage;
