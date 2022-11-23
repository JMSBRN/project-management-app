import { useAppDispatch, useAppSelector } from 'app/hooks';
import Burger from 'components/burger/Burger';
import Language from 'components/Language/Language';
import Link from 'components/link/Link';
import Logo from 'components/logo/Logo';
import { selectApi, setBoards, setSignOut } from 'features/api/ApiSlice';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LinksNavWrapper, HeadersWrapper, Name } from './Header.style';

interface IProps {
  isAuth: boolean;
}

const Header = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { userName, boards } = useAppSelector(selectApi);
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(0);

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
        <LinksNavWrapper scroll={scroll} isAuth={props.isAuth} burger={burger}>
          {boards ? (
            <>
              <Language />
              <Link to="/edit-profile" text="edit profile" />
              <Link to="/boards" text="new board" />
              <div onClick={() => handleSingOut()}>
                <Link to="/" text="sign out" />
              </div>
            </>
          ) : props.isAuth ? (
            <div onClick={() => dispatch(setBoards(true))}>
              <Link text={'go to boards'} to={'/boards'} />
            </div>
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
