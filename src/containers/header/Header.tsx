import Link from "components/link/Link";
import React from "react";
import { Outlet } from "react-router-dom";
import { LinksNavWrapper, HeadersWrapper } from "./Header.style";

const Header = () => {
  return (
    <>
      <HeadersWrapper>
        <LinksNavWrapper>
          <Link to="/edit-profile" text="edit profile" />
          <Link to="/boards" text="create new board" />
          <Link to="#" text="select language" />
          <Link to="/" text="sing out" />
        </LinksNavWrapper>
      </HeadersWrapper>
      <Outlet />
    </>
  );
};

export default Header;
