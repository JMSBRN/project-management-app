import React, { useCallback, useEffect, useState } from 'react';
import Form from 'components/form/Form';
import { selectUser } from 'features/user/UserSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useNavigate } from 'react-router-dom';
import { AuthtFormWRapper, AuthtWrapper } from './Auth.style';
import { apiSliceSignIn, apiSliceSignUp, selectApi } from 'features/api/ApiSlice';

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const formSignInErros = {
    name: '',
    login: '',
    password: '',
  };
  const [errorsForm, setErrorsForm] = useState(formSignInErros);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const { errors } = useAppSelector(selectApi);
  const setErrors = useCallback(() => {
    errors.map((el) => {
      if (el.includes('name')) {
        const newObject = Object.assign(errorsForm.name, 'name');
        return newObject;
      }
    });
  }, [errors]);
  useEffect(() => {
    setErrors();
  }, [errors, setErrors]);
  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
    dispatch(apiSliceSignIn(user));
  };
  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // navigate('/');
    dispatch(apiSliceSignUp(user));
  };
  return (
    <AuthtWrapper>
      <div className="">{JSON.stringify(errors)}</div>
      <AuthtFormWRapper>
        {props.isSingInForm ? (
          <Form errors={errorsForm} onSubmit={(e) => handleSignInSubmit(e)} label="sign in Form" />
        ) : (
          <Form
            errors={errorsForm}
            isNameInput={true}
            onSubmit={(e) => handleSignUpSubmit(e)}
            label="sign up Form"
          />
        )}
      </AuthtFormWRapper>
    </AuthtWrapper>
  );
};

export default Auth;
