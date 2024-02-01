import { Route, Routes } from "react-router-dom";
import { ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider } from "antd";

import koKR from "antd/lib/locale/ko_KR";

function App() {
  return (
    <ConfigProvider
      locale={koKR}
      theme={{
        components: {
          Modal: {
            contentBg: "#F6F6F6",
            headerBg: "#F6F6F6",
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
      </Routes>
    </ConfigProvider>
  );
}

export default App;
