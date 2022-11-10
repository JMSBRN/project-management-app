import Header from "containers/header/Header";
import About from "pages/about/About";
import Boards from "pages/boards/Boards";
import NotFound from "pages/not-found/NotFound";
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
        <Route index element={<Welcome />} />
        <Route path="boards" element={<Boards />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
