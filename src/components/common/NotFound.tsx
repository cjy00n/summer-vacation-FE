import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const NotFound = () => {
  const navigate = useNavigate();

  const linkToBeforePage = () => {
    navigate(-1);
  };

  const linkToHomePage = () => {
    navigate(ROUTE.HOME_PAGE.link);
  };

  return (
    <div className="my-20 flex h-dvh flex-col items-center text-center">
      <h1 className="my-10 text-lg font-bold ">페이지를 찾을 수 없습니다.</h1>
      <p>
        방문하시려는 페이지의 주소가 잘못 입력되었거나, <br />
        페이지의 주소가 변경 혹은 삭제되어 <br />
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <div className="my-10 flex w-1/2 justify-between">
        <button
          className="rounded-lg bg-orange-200 p-1"
          onClick={linkToBeforePage}
        >
          이전 페이지로 이동
        </button>
        <button
          className="rounded-lg bg-orange-200 p-1"
          onClick={linkToHomePage}
        >
          여름방학 홈
        </button>
      </div>
    </div>
  );
};

export default NotFound;
