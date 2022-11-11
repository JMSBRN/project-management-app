import Header from "containers/header/Header";
import ProtectedRoutes from "containers/protected-routes/ProtectedRoutes";
import Auth from "pages/auth/Auth";
import Boards from "pages/boards/Boards";
import EditProfile from "pages/edit-profile/EditProfile";
import Main from "pages/main/Main";
import NotFound from "pages/not-found/NotFound";
import Welcome from "pages/welcome/Welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./main.style";
import "./main.style.ts";

function App() {
  const isAuth = true;
  return (
    <AppWrapper>
      <Routes>
        <Route index element={<Welcome isAuth={isAuth} />} />
        <Route path="/auth" element={<Auth isLogin={false} />} />
        <Route path="*" element={<NotFound />} />
        <Route
          element={
            <ProtectedRoutes
              auth={{
                isAuthenticated: isAuth,
              }}
            />
          }
        >
          <Route element={<Header />}>
            <Route path="/main" element={<Main />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
        </Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
