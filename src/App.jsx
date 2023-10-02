import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Detail from "./page/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/detail/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
