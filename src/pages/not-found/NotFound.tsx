import React from "react";
import { NotFoundImg, NotFoundLink, NotFoundWrapper } from "./NotFound.style";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundImg />
      <h1>Page not Found</h1>
      <NotFoundLink to="/main">Back</NotFoundLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
