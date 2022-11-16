import { useAppDispatch, useAppSelector } from 'app/hooks';
import { apiSliceSignIn, apiSliceSignUp, selectApi } from 'features/api/ApiSlice';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, FormWrapper, InputWrapper, LabelWrapper } from './Form.style';
interface IFormProps {
  label: string;
}

interface FormValues {
  name: string;
  login: string;
  password: string;
}

const Form = (props: IFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isloggedIn } = useAppSelector(selectApi);
  const isSignUpForm = props.label === 'sing up Form';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const onSubmit = (data: FormValues) => {
    isSignUpForm ? dispatch(apiSliceSignUp(data)) : dispatch(apiSliceSignIn(data));
    reset();
    isloggedIn && navigate('/main');
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {props.label}
      {isSignUpForm && (
        <LabelWrapper>
          name
          <InputWrapper
            type="text"
            {...register('name', {
              required: 'Enter your name',
              minLength: {
                value: 2,
                message: 'name must be more than one letter A-z',
              },
              pattern: {
                value: /^[A-Z][-a-zA-Z]+$/,
                message: 'name must be more than one letter',
              },
            })}
          />
          <div>{errors?.name && errors.name.message}</div>
        </LabelWrapper>
      )}
      <LabelWrapper>
        login
        <InputWrapper
          type="text"
          {...register('login', {
            required: 'Enter your login',
            minLength: {
              value: 2,
              message: 'Login must be more than one letter',
            },
          })}
        />
        <div>{errors?.login && errors.login.message}</div>
      </LabelWrapper>
      <LabelWrapper>
        password
        <InputWrapper
          type="password"
          {...register('password', {
            required: 'Enter your password',
            minLength: {
              value: 7,
              message: 'Password cannot be shorter than 5 characters',
            },
          })}
        />
        <div>{errors?.password && errors.password.message}</div>
      </LabelWrapper>
      <ButtonWrapper type="submit" disabled={!isValid} isValid={isValid}>
        Submit
      </ButtonWrapper>
    </FormWrapper>
  );
};
export default Form;
