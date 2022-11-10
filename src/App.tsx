import Header from "containers/header/Header";
import About from "pages/about/About";
import Boards from "pages/boards/Boards";
import Welcome from "pages/welcome/Welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./main.style";
import "./main.style.ts";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path={"/"} element={<Welcome />} />
        <Route path={"/boards"} element={<Boards />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
