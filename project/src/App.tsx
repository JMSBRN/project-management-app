import { useAppSelector } from 'app/hooks';
import Footer from 'containers/footer/Footer';
import Header from 'containers/header/Header';
import ProtectedRoutes from 'containers/protected-routes/ProtectedRoutes';
import { selectApi } from 'features/api/ApiSlice';
import Auth from 'pages/auth/Auth';
import Board from 'pages/boards/board/Board';
import Boards from 'pages/boards/Boards';
import EditProfile from 'pages/edit-profile/EditProfile';
import NotFound from 'pages/not-found/NotFound';
import Welcome from 'pages/welcome/Welcome';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { isOnline } from 'utils/apiUtils';
import { AppWrapper, ErrorInternetDisconnected, GlobalStyle, Loader } from './main.style';
import './main.style.ts';
import './localization/i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { userName, loading } = useAppSelector(selectApi);
  const { t } = useTranslation();
  return (
    <>
      <AppWrapper data-testid="app">
        {loading && <Loader />}
        {!isOnline() && (
          <ErrorInternetDisconnected>{t('no-internet-connect-msg')}</ErrorInternetDisconnected>
        )}
        <GlobalStyle />
        <Header isAuth={!!userName} />
        <Routes>
          <Route index element={<Welcome />} />
          <Route
            path="/auth-sign-in"
            element={!!userName ? <Welcome /> : <Auth isSingInForm={true} />}
          />
          <Route
            path="/auth-sign-up"
            element={!!userName ? <Welcome /> : <Auth isSingInForm={false} />}
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
            <Route path="/boards" element={<Boards />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/board" element={<Board />} />
          </Route>
        </Routes>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
