import React from 'react';
import Form from 'components/form/Form';
import { AuthtWrapper, ErrorMessage, RegisterMessage, RegisterMessageWrapper } from './Auth.style';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectApi, setRegistered } from 'features/api/ApiSlice';
import Link from 'components/link/Link';

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const { isSingInForm } = props;
  const dispatch = useAppDispatch();
  const { errorApiMessage, registered } = useAppSelector(selectApi);
  return (
    <AuthtWrapper>
      {errorApiMessage && (
        <RegisterMessageWrapper>
          <ErrorMessage>{errorApiMessage}</ErrorMessage>
        </RegisterMessageWrapper>
      )}
      {registered && (
        <RegisterMessageWrapper>
          <RegisterMessage>
            Registration Successful! <br /> Try Sign in please
            <br />
            <br />
            <div onClick={() => dispatch(setRegistered(false))}>
              <Link text="go to Sign in" to="/auth-sign-in" />
            </div>
          </RegisterMessage>
        </RegisterMessageWrapper>
      )}
      {isSingInForm ? <Form label="sign in Form" /> : <Form label="sign up Form" />}
    </AuthtWrapper>
  );
};

export default Auth;
