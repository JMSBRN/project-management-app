import { useAppDispatch } from "app/hooks";
import Link from "components/link/Link";
import { setToken } from "features/api/ApiSlice";
import React from "react";
import { Outlet } from "react-router-dom";
import { LinksNavWrapper, HeadersWrapper } from "./Header.style";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <HeadersWrapper>
        <LinksNavWrapper>
          <Link to="/edit-profile" text="edit profile" />
          <Link to="/boards" text="create new board" />
          <Link to="#" text="select language" />
          <div onClick={() => dispatch(setToken(""))}>
            <Link to="/" text="sing out" />
          </div>
        </LinksNavWrapper>
      </HeadersWrapper>
      <Outlet />
    </>
  );
};

export default Header;
