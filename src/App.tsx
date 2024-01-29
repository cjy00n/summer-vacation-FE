import { Route, Routes } from "react-router-dom";
import { ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
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
              <div className={el.haveBottomAppBar ? "content-page" : ""}>
                {el.element}
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
