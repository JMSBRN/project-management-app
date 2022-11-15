import { useAppDispatch } from 'app/hooks';
import Burger from 'components/burger/Burger';
import Language from 'components/Language/Language';
import Link from 'components/link/Link';
import Logo from 'components/logo/Logo';
import { setToken } from 'features/api/ApiSlice';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LinksNavWrapper, HeadersWrapper } from './Header.style';

interface IProps {
  isAuth: boolean;
}

const Header = (props: IProps) => {
  const dispatch = useAppDispatch();
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  const changeBurgerMenu = () => {
    burger ? setBurger(false) : setBurger(true);
  };

  return (
    <>
      <HeadersWrapper scroll={scroll}>
        <Logo />
        <LinksNavWrapper scroll={scroll} isAuth={props.isAuth} burger={burger}>
          {props.isAuth ? (
            <>
              <Language />
              <Link to="/edit-profile" text="edit profile" />
              <Link to="/boards" text="new board" />
              <div onClick={() => dispatch(setToken(''))}>
                <Link to="/" text="sing out" />
              </div>
            </>
          ) : (
            <>
              <Language />
              <Link to={'/auth-sing-in'} text=" sing in" />
              <Link to={'/auth-sing-up'} text=" sing up" />
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
