import { useAppDispatch, useAppSelector } from 'app/hooks';
import Burger from 'components/burger/Burger';
import Language from 'components/Language/Language';
import Link from 'components/link/Link';
import Logo from 'components/logo/Logo';
import { selectApi, setAuthorised, setUserName, setToken } from 'features/api/ApiSlice';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LinksNavWrapper, HeadersWrapper } from './Header.style';

interface IProps {
  isAuth: boolean;
}

const Header = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector(selectApi);
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  const changeBurgerMenu = () => {
    burger ? setBurger(false) : setBurger(true);
  };
  const handleSingOut = () => {
    dispatch(setAuthorised(false));
    dispatch(setToken(''));
    dispatch(setUserName(''));
    localStorage.removeItem('user-name');
  };
  return (
    <>
      <HeadersWrapper scroll={scroll}>
        <Logo />
        <div className="">{userName}</div>
        <LinksNavWrapper scroll={scroll} isAuth={props.isAuth} burger={burger}>
          {props.isAuth ? (
            <>
              <Language />
              <Link to="/edit-profile" text="edit profile" />
              <Link to="/boards" text="new board" />
              <div onClick={() => handleSingOut()}>
                <Link to="/" text="sign out" />
              </div>
            </>
          ) : (
            <>
              <Language />
              <Link to={'/auth-sign-in'} text=" sign in" />
              <Link to={'/auth-sign-up'} text=" sign up" />
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
