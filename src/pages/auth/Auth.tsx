import React from 'react';
import Form from 'components/form/Form';
import { AuthtWrapper } from './Auth.style';

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  return (
    <AuthtWrapper>
      {props.isSingInForm ? <Form label="sign in Form" /> : <Form label="sign up Form" />}
    </AuthtWrapper>
  );
};

export default Auth;
