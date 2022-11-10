import Link from "components/link/Link";
import React from "react";
import { HeadersWrapper, LinksNavWrapper } from "./Header.style";

const Header = () => {
  return (
    <HeadersWrapper>
      <LinksNavWrapper>
        <Link to="/about" text="about" />
        <Link to="/boards" text="boards" />
        <Link to="/" text="home" />
      </LinksNavWrapper>
    </HeadersWrapper>
  );
};

export default Header;
