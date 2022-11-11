import Link from "components/link/Link";
import Team from "containers/team/Team";
import React from "react";
import { WelcomeWrapper } from "./Welcome.style";

interface IWelcomeProps {
  isAuth: boolean;
}
const Welcome = (props: IWelcomeProps) => {
  return (
    <WelcomeWrapper>
      {props.isAuth ? (
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
