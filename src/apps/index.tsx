import { urls } from "@/constants/urls";
import { FrontStageLayout } from "@/layouts/frontage";
import { Route, Routes } from "react-router-dom";
import Home from "./home";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<FrontStageLayout />}>
        <Route path={urls.home} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
