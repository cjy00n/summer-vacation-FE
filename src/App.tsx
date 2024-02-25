import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider, message } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./recoil/atoms/isLoggedinState";
import { useGetCheckVaildToken } from "./hooks/getCheckValidToken";
import { getRefreshToken } from "./hooks/getRefreshToken";
import { useGetCheckVaildRefreshToken } from "./hooks/getCheckVaildRefreshToken";
import { useQueryClient } from "react-query";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const linkToLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
  };

  const { data: checkVaildToken, isSuccess: checkVaildTokenSuccess } =
    useGetCheckVaildToken();

  const {
    data: checkVaildRefreshToken,
    isSuccess: checkVaildRefreshTokenSuccess,
  } = useGetCheckVaildRefreshToken();

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const currentRoute = ROUTE_ARR.find(
    (route) => route.path === location.pathname,
  );

  const queryClient = useQueryClient();
  useEffect(() => {
    const refreshAccessToken = async () => {
      if (checkVaildToken === false)
        await getRefreshToken().then(() =>
          // 활성화된 쿼리만 재검증하고 싶을 때
          queryClient.invalidateQueries({
            refetchActive: true, // 활성화된 쿼리들만 재검증
            refetchInactive: false, // 비활성화된 쿼리는 재검증하지 않음
          }),
        );
    };

    if (currentRoute?.authRequired === undefined) {
      console.log(checkVaildTokenSuccess, checkVaildRefreshTokenSuccess);
      if (accessToken && refreshToken) {
        if (checkVaildTokenSuccess && checkVaildRefreshTokenSuccess) {
          if (checkVaildToken && checkVaildRefreshToken) {
            setIsLoggedIn(true);
          } else if (!checkVaildRefreshToken) {
            message.info("토큰이 만료되었습니다. 재로그인이 필요합니다.");
            setIsLoggedIn(false);
          } else if (!checkVaildToken) {
            refreshAccessToken();
          }
        }
      } else {
        setIsLoggedIn(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    checkVaildToken,
    checkVaildTokenSuccess,
    checkVaildRefreshTokenSuccess,
    checkVaildRefreshToken,
  ]);

  useEffect(() => {
    if (currentRoute?.authRequired === undefined && isLoggedIn === false) {
      linkToLoginPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <ConfigProvider
      locale={koKR}
      theme={{
        components: {
          Modal: {
            contentBg: "#F6F6F6",
            headerBg: "#F6F6F6",
          },
          Drawer: {
            colorBgElevated: "#F6F6F6",
          },
          Select: {
            optionSelectedColor: "#FF6D3C",
            optionSelectedBg: "#FDF8F4",
          },
        },
        token: {
          colorPrimary: "#34C759",
        },
      }}
    >
      <Routes>
        {ROUTE_ARR.map((el) => (
          <Route
            path={el.path}
            key={el.path}
            element={
              <div>
                <div className={`${el.haveBottomAppBar ? "pb-20" : ""}`}>
                  {el.element}
                </div>
                {el.haveBottomAppBar && <BottomAppBar />}
              </div>
            }
          />
        ))}
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
