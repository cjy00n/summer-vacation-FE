import { Link } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import { postKaKaoSignIn } from "../../hooks/postKaKaoSignIn";

const AuthPage = () => {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URL;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const code = new URL(window.location.href).searchParams.get("code");

  if (code) postKaKaoSignIn(code!, REDIRECT_URI);

  console.log(code);
  return (
    <div className="flex flex-col items-center bg-primary-white h-[100vh]">
      <span>여름방학</span>
      <Link to={KAKAO_AUTH_URI}>
        <button className="flex items-center justify-center bg-primary-yellow w-40 h-12 rounded-[50px]">
          <RiKakaoTalkFill />
          <span className="mx-1 text-base font-semibold">카카오 로그인</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthPage;
