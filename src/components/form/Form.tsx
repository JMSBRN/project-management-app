import { useAppDispatch, useAppSelector } from 'app/hooks';
import { apiSliceSignIn, apiSliceSignUp, selectApi } from 'features/api/ApiSlice';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, FormWrapper, InputWrapper, LabelWrapper } from './Form.style';
interface IFormProps {
  label: string;
  isEditProfileForm?: boolean;
  onClickDeletUserBtn?: () => void;
  isGetIdUser?: boolean;
}

interface FormValues {
  name: string;
  login: string;
  password: string;
}

const Form = (props: IFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { nameLoggedUserById } = useAppSelector(selectApi);
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
    setTimeout(() => {
      navigate(`${nameLoggedUserById !== '""' && '/main'}`);
    }, 4000);
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
      {props.isEditProfileForm && (
        <>
          <br />
          <ButtonWrapper
            onClick={props.onClickDeletUserBtn}
            disabled={!props.isGetIdUser}
            type="button"
            isValid={isValid}
          >
            Delete User
          </ButtonWrapper>
        </>
      )}
    </FormWrapper>
  );
};
export default Form;
