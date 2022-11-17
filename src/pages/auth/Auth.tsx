import React from 'react';
import Form from 'components/form/Form';
import { AuthtWrapper, ErrorMessage } from './Auth.style';
import { useAppSelector } from 'app/hooks';
import { selectApi } from 'features/api/ApiSlice';

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const { errorApiMessage } = useAppSelector(selectApi);
  return (
    <AuthtWrapper>
      <ErrorMessage>{errorApiMessage}</ErrorMessage>
      {props.isSingInForm ? <Form label="sign in Form" /> : <Form label="sign up Form" />}
    </AuthtWrapper>
  );
};

export default Auth;
