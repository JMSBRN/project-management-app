import { useAppSelector } from "app/hooks";
import Header from "containers/header/Header";
import ProtectedRoutes from "containers/protected-routes/ProtectedRoutes";
import { selectUser } from "features/user/UserSlice";
import Auth from "pages/auth/Auth";
import Boards from "pages/boards/Boards";
import EditProfile from "pages/edit-profile/EditProfile";
import Main from "pages/main/Main";
import NotFound from "pages/not-found/NotFound";
import Welcome from "pages/welcome/Welcome";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./main.style";
import "./main.style.ts";

function App() {
  const { isLogin } = useAppSelector(selectUser);
  return (
    <>
      <GlobalStyle />
      <Header isAuth={isLogin} />
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/auth-sing-in" element={<Auth isSingInForm={true} />} />
        <Route path="/auth-sing-out" element={<Auth isSingInForm={false} />} />
        <Route path="*" element={<NotFound />} />
        <Route
          element={
            <ProtectedRoutes
              auth={{
                isAuthenticated: isLogin,
              }}
            />
          }
        >
          <Route path="/main" element={<Main />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
