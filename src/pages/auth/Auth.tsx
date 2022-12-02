import React from 'react';
import Form from 'components/form/Form';
import {
  AuthtWrapper,
  ErrorMessage,
  RegisterMessage,
  RegisterMessageText,
  RegisterMessageWrapper,
} from './Auth.style';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectApi, setRegistered } from 'features/api/ApiSlice';
import Link from 'components/link/Link';
import { useTranslation } from 'react-i18next';

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const { isSingInForm } = props;
  const dispatch = useAppDispatch();
  const { errorApiMessage, registered } = useAppSelector(selectApi);
  const { t } = useTranslation();
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
            <RegisterMessageText>{t('main.auth.registration-success-msg')}</RegisterMessageText>
            <div onClick={() => dispatch(setRegistered(false))}>
              <Link text={t('main.auth.go-to-Sign-in-btn')} to="/auth-sign-in" />
            </div>
          </RegisterMessage>
        </RegisterMessageWrapper>
      )}
      {isSingInForm ? (
        <Form label={t('main.auth.sign-in')} />
      ) : (
        <Form label={t('main.auth.sign-up')} />
      )}
    </AuthtWrapper>
  );
};

export default Auth;
