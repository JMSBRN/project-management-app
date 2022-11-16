import React from 'react';
import Form from 'components/form/Form';
import { AuthtWrapper } from './Auth.style';
import { useAppSelector } from 'app/hooks';
import { selectApi } from 'features/api/ApiSlice';

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const { errorApiMessage } = useAppSelector(selectApi);
  return (
    <AuthtWrapper>
      <div style={{ height: '20px', color: 'red', position: 'absolute', top: '100px' }}>
        {errorApiMessage}
      </div>
      {props.isSingInForm ? <Form label="sing in Form" /> : <Form label="sing up Form" />}
    </AuthtWrapper>
  );
};

export default Auth;
