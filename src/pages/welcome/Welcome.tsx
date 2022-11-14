import Link from "components/link/Link";
import Team from "containers/team/Team";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  IUser,
} from "features/api/apiUtils";
import React from "react";
import { WelcomeLinksWrapper, WelcomeWrapper } from "./Welcome.style";

interface IWelcomeProps {
  isAuth: boolean;
}
const Welcome = (props: IWelcomeProps) => {
  const user: IUser = {
    name: "Vasya",
    login: "user001",
    password: "userpass@123",
  };
  const id = "9d039c9a-8a42-4842-a8e2-32346bb72e6d";
  return (
    <WelcomeWrapper>
      <br />
      <button onClick={() => getUsers()}>getUsers</button>
      <br />
      <button onClick={() => createUser(user)}>createUser</button>
      <br />
      <button onClick={() => getUserById(id)}>getUserById</button>
      <br />
      <button onClick={() => deleteUser(id)}>deleteUser</button>
      <br />
      <br />
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
