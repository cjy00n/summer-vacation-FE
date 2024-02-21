import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider, message } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./recoil/atoms/isLoggedinState";
import { useGetCheckVaildToken } from "./hooks/getCheckValidToken";
import { usePostTokenRefresh } from "./hooks/postTokenRefressh";

function App() {
  const navigate = useNavigate();

  const [, contextHolder] = message.useMessage();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const linkToLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
  };

  const checkVaildToken = useGetCheckVaildToken();
  const { mutate: tokenRefresh } = usePostTokenRefresh();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      if (checkVaildToken.data === true) {
        setIsLoggedIn(true);
      } else if (checkVaildToken.data === false) {
        tokenRefresh();
      } else if (checkVaildToken.data === "incorrect format")
        setIsLoggedIn(false);
    } else {
      setIsLoggedIn(false);
    }

    const currentRoute = ROUTE_ARR.find(
      (route) => route.path === location.pathname,
    );

    if (currentRoute?.authRequired === undefined && isLoggedIn === false) {
      linkToLoginPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, checkVaildToken.data]);

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
                  {contextHolder}
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
