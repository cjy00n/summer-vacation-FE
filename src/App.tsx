import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./recoil/atoms/isLoggedinState";
import { useGetCheckVaildToken } from "./hooks/getCheckValidToken";
import { getRefreshToken } from "./hooks/getRefreshToken";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const linkToLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
  };

  const { data: checkVaildToken, isSuccess: checkVaildTokenSuccess } =
    useGetCheckVaildToken();

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const currentRoute = ROUTE_ARR.find(
    (route) => route.path === location.pathname,
  );

  useEffect(() => {
    const refreshAccessToken = async () => {
      if (checkVaildToken === false) {
        await getRefreshToken();
      }
    };

    if (currentRoute?.authRequired === undefined) {
      if (accessToken && refreshToken) {
        if (checkVaildToken && checkVaildTokenSuccess) {
          setIsLoggedIn(true);
        } else if (!checkVaildToken && checkVaildTokenSuccess) {
          refreshAccessToken();
        }
      } else {
        setIsLoggedIn(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkVaildToken, checkVaildTokenSuccess]);

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
