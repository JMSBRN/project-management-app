import ProtectedRoutes from "containers/protected-routes/ProtectedRoutes";
import Auth from "pages/auth/Auth";
import Boards from "pages/boards/Boards";
import Main from "pages/main/Main";
import Welcome from "pages/welcome/Welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./main.style";
import "./main.style.ts";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route index element={false ? <Main /> : <Welcome />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/main" element={<Main />} />
        <Route path="/auth" element={<Auth isLogin={false} />} />
        <ProtectedRoutes isLogin={true} redirectPath={"/"}></ProtectedRoutes>
      </Routes>
    </AppWrapper>
  );
}

export default App;
