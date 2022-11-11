import Link from "components/link/Link";
import React from "react";
import { LinksNavWrapper, HeadersWrapper } from "./Header.style";

const Header = () => {
  return (
    <HeadersWrapper>
      <LinksNavWrapper>
        <Link to="#" text="edit profile" />
        <Link to="#" text="sing out" />
        <Link to="#" text="create new board" />
        <Link to="#" text="select language" />
      </LinksNavWrapper>
    </HeadersWrapper>
  );
};

export default Header;
