import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { CustomButton, TopAppBar } from ".";

const NotFound = () => {
  const navigate = useNavigate();

  const linkToHomePage = () => {
    navigate(ROUTE.HOME_PAGE.link);
  };

  return (
    <div className="flex h-dvh flex-col">
      <TopAppBar leftGoBack />
      <div className="my-auto flex h-1/2 flex-col items-center">
        <img src="/image/notFound.webp" className="w-52" />
        <h1 className="my-2 text-lg font-bold ">이런!</h1>
        <p className="text-gray-500">페이지가 없나봐요.</p>
        <div className="my-10">
          <CustomButton
            content={"홈으로"}
            size="long"
            onClick={linkToHomePage}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
