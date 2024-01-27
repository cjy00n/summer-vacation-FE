import { Route, Routes } from "react-router-dom";
import { ROUTE_ARR } from "./routes/Route";
import { BottomAppBar } from "./components/common";

function App() {
  return (
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
  );
}

export default App;
