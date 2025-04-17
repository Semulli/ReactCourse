import { Route, Routes } from "react-router";
import "./App.css";
import { ROUTER } from "./constants/Router";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.home} element={<Home />} />
        <Route path={`${ROUTER.detail}/:id`} element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
