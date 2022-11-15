import { useAppSelector } from 'app/hooks';
import Footer from 'containers/footer/Footer';
import Header from 'containers/header/Header';
import ProtectedRoutes from 'containers/protected-routes/ProtectedRoutes';
import { selectApi } from 'features/api/ApiSlice';
import Auth from 'pages/auth/Auth';
import Boards from 'pages/boards/Boards';
import EditProfile from 'pages/edit-profile/EditProfile';
import Main from 'pages/main/Main';
import NotFound from 'pages/not-found/NotFound';
import Welcome from 'pages/welcome/Welcome';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper, GlobalStyle } from './main.style';
import './main.style.ts';

function App() {
  const { token } = useAppSelector(selectApi);
  let isToken = false;
  if (token === undefined) {
    isToken = false;
  } else {
    isToken = token.length > 2;
  }
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        <Header isAuth={true} />
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/auth-sing-in" element={<Auth isSingInForm={true} />} />
          <Route path="/auth-sing-up" element={<Auth isSingInForm={false} />} />
          <Route path="*" element={<NotFound />} />
          <Route
            element={
              <ProtectedRoutes
                auth={{
                  isAuthenticated: true,
                }}
              />
            }
          >
            <Route path="/main" element={<Main />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
