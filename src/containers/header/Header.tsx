import { useAppDispatch, useAppSelector } from 'app/hooks';
import Burger from 'components/burger/Burger';
import Language from 'components/Language/Language';
import Link from 'components/link/Link';
import Logo from 'components/logo/Logo';
import { selectApi, setBoardsBtns, setSignOut } from 'features/api/ApiSlice';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LinksNavWrapper, HeadersWrapper, Name } from './Header.style';
import { useTranslation } from 'react-i18next';

interface IProps {
  isAuth: boolean;
}

const Header = (props: IProps) => {
  const { isAuth } = props;
  const dispatch = useAppDispatch();
  const { userName, boardsBtns } = useAppSelector(selectApi);
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  const changeBurgerMenu = () => {
    burger ? setBurger(false) : setBurger(true);
  };
  const handleSingOut = () => {
    dispatch(setSignOut());
  };
  return (
    <>
      <HeadersWrapper scroll={scroll}>
        <Logo />
        <Name>{userName}</Name>
        <LinksNavWrapper scroll={scroll} isAuth={isAuth} burger={burger}>
          {boardsBtns ? (
            <>
              <Language />
              <Link to="/edit-profile" text={t(`header.edit-profile`)} />
              <Link to="/boards" text={t(`header.new-board`)} />
              <div onClick={() => handleSingOut()}>
                <Link to="/" text={t(`header.sign-out`)} />
              </div>
            </>
          ) : isAuth ? (
            <div onClick={() => dispatch(setBoardsBtns(true))}>
              <Link to={'/boards'} text={t(`header.go-to-boards`)} />
            </div>
          ) : (
            <>
              <Language />
              <Link to={'/auth-sign-in'} text={t(`header.sign-in`)} />
              <Link to={'/auth-sign-up'} text={t(`header.sign-up`)} />
            </>
          )}
        </LinksNavWrapper>
        <Burger burger={burger} changeBurgerMenu={changeBurgerMenu} />
      </HeadersWrapper>
      <Outlet />
    </>
  );
};

export default Header;
