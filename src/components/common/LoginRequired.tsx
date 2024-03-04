import { useNavigate } from "react-router-dom";
import { CustomButton } from ".";
import { ROUTE } from "../../routes/Route";

const LoginRequired = () => {
  const navigate = useNavigate();

  /* 로그인 페이지로 이동 */
  const linkToLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
  };

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
      <img src="/image/notFound.webp" className="w-52" />
      <h1 className="my-2 text-lg font-bold ">이런!</h1>
      <p className="text-gray-500">로그인이 필요한 기능이에요.</p>
      <div className="my-6 ">
        <CustomButton
          content={"로그인 페이지로 이동"}
          onClick={linkToLoginPage}
        />
      </div>
    </div>
  );
};

export default LoginRequired;
