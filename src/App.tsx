import { Route, Routes, useNavigate } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider, message } from "antd";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./recoil/atoms/isLoggedinState";
import { useGetCheckVaildToken } from "./api/getCheckValidToken";
import { getRefreshToken } from "./api/getRefreshToken";
import { useGetCheckVaildRefreshToken } from "./api/getCheckVaildRefreshToken";
import { useQueryClient } from "react-query";
import koKR from "antd/lib/locale/ko_KR";
import { useGetUserInfo } from "./api/getMyUserInfo";

function App() {
  const navigate = useNavigate();
  const [, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const linkToLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
  };

  const { data: checkVaildToken, isSuccess: checkVaildTokenSuccess } =
    useGetCheckVaildToken();

  const {
    data: checkVaildRefreshToken,
    isSuccess: checkVaildRefreshTokenSuccess,
  } = useGetCheckVaildRefreshToken();

  const { data: userInfo } = useGetUserInfo();

  /* GA 데이터 레이어 - 유저의 아이디, 성별, 생년 정보 push */
  window.dataLayer = window.dataLayer || [];

  useEffect(() => {
    if (userInfo) {
      window.dataLayer.push({
        userId: userInfo.id,
        gender: userInfo.gender,
        birth: parseInt(userInfo.birth),
      });
    }
  }, [userInfo]);

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
          queryClient.invalidateQueries({
            refetchActive: true,
            refetchInactive: false,
          }),
        );
    };

    if (currentRoute?.authRequired === undefined) {
      if (accessToken && refreshToken) {
        if (checkVaildTokenSuccess && checkVaildRefreshTokenSuccess) {
          if (checkVaildToken && checkVaildRefreshToken) {
            setIsLoggedIn(true);
          } else if (!checkVaildRefreshToken) {
            message.info("토큰이 만료되었습니다. 재로그인이 필요합니다.");
            setIsLoggedIn(false);
            linkToLoginPage();
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
              <div className="h-min-dvh">
                <div className={el.haveBottomAppBar ? "pb-bottom-tab" : ""}>
                  {el.element}
                </div>
                {el.haveBottomAppBar && <BottomAppBar />}
              </div>
            }
          />
        ))}
      </Routes>
    </ConfigProvider>
  );
}

export default App;
