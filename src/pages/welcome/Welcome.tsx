import Link from "components/link/Link";
import Team from "containers/team/Team";
import React from "react";
import { WelcomeLinksWrapper, WelcomeWrapper } from "./Welcome.style";

interface IWelcomeProps {
  isAuth: boolean;
}
const Welcome = (props: IWelcomeProps) => {
  return (
    <WelcomeWrapper>
      <WelcomeLinksWrapper>
        {props.isAuth ? (
          <Link to={"/main"} text=" to main page" />
        ) : (
          <>
            <Link to={"/auth-sing-in"} text=" sing in" />
            <Link to={"/auth-sing-out"} text=" sing up" />
          </>
        )}
      </WelcomeLinksWrapper>
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
