import Form from "components/form/Form";
import React from "react";
import { AuthtWrapper } from "./Auth.style";

interface IAuthProps {
  isLogin: boolean;
}
const Auth = (props: IAuthProps) => {
  return (
    <AuthtWrapper>
      <br />
      <br />
      <br />
      <br />
      <br />
      {props.isLogin ? (
        <Form label="sing in Form" />
      ) : (
        <Form label="sing out Form" />
      )}
    </AuthtWrapper>
  );
};

export default Auth;
