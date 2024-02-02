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

  if (code) postKaKaoSignIn(code!, REDIRECT_URI, navigate);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      navigate(ROUTE.HOME_PAGE.link);
    }
  }, [navigate]);

  return (
    <div className="flex min-h-[100vh] flex-col content-center items-center justify-center bg-primary-white">
      <img src="/image/mainImg.svg" />
      <img src="/logo.svg" />
      <Link to={KAKAO_AUTH_URI}>
        <button className="mt-10 flex h-12 w-40 items-center justify-center rounded-[50px] bg-primary-yellow">
          <span className="mx-1 text-base font-semibold">카카오 로그인</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthPage;
