import Link from "components/link/Link";
import React from "react";
import { HeadersWrapper, LinksNavWrapper } from "./Header.style";

const Header = () => {
  return (
    <HeadersWrapper>
      <LinksNavWrapper>
        <Link to="/about" text="about" />
        <Link to="/" text="home" />
      </LinksNavWrapper>
      <LinksNavWrapper>
        <Link text={"sing in "} to={true && "/boards"} />
        <Link text={"sing out "} to={true && "/"} />
      </LinksNavWrapper>
    </HeadersWrapper>
  );
};

export default Header;
