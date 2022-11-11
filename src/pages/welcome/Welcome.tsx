import Link from "components/link/Link";
import Team from "containers/team/Team";
import React from "react";
import { WelcomeWrapper } from "./Welcome.style";

const Welcome = () => {
  return (
    <WelcomeWrapper>
      {false ? (
        <Link to={"/main"} text=" to main page" />
      ) : (
        <>
          <Link to={"/auth"} text=" sing in" />
          <Link to={"/auth"} text=" sing out" />
        </>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Team />
    </WelcomeWrapper>
  );
};

export default Welcome;
