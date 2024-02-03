import { Route, Routes } from "react-router-dom";
import { ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider, message } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import React from "react";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

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
      {contextHolder}
      <Routes>
        {ROUTE_ARR.map((el) => (
          <Route
            path={el.path}
            key={el.path}
            element={
              <div>
                <div className={`${el.haveBottomAppBar ? "pb-20" : ""}`}>
                  {React.cloneElement(el.element, { messageApi })}
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
