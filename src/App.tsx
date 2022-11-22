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
import { AppWrapper, GlobalStyle, Loader } from './main.style';
import './main.style.ts';

function App() {
  const { userName, loading } = useAppSelector(selectApi);
  return (
    <>
      <AppWrapper>
        {loading && <Loader />}
        <GlobalStyle />
        <Header isAuth={!!userName} />
        <Routes>
          <Route index element={<Welcome />} />
          <Route
            path="/auth-sign-in"
            element={!!userName ? <Main /> : <Auth isSingInForm={true} />}
          />
          <Route
            path="/auth-sign-up"
            element={!!userName ? <Main /> : <Auth isSingInForm={false} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            element={
              <ProtectedRoutes
                auth={{
                  isAuthenticated: !!userName,
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
