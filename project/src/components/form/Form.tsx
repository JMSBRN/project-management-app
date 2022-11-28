import React from 'react';
import { useAppDispatch } from 'app/hooks';
import { setLoader } from 'features/api/ApiSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonWrapper, FormWrapper, InputWrapper, LabelWrapper } from './Form.style';
import { signInThunk } from 'features/api/thunks/signInThunk';
import { signUpThunk } from 'features/api/thunks/signUpThunk';
import { refreshTokenThunk } from 'features/api/thunks/refreshTokenThunk';

interface IFormProps {
  label: string;
  isEditProfileForm?: boolean;
  onClickDeletUserBtn?: () => void;
  onSubmiteEditProfeileForm?: SubmitHandler<FormValues>;
  isGetIdUser?: boolean;
}
export interface FormValues {
  name?: string;
  login: string;
  password: string;
}
const Form = (props: IFormProps) => {
  const { label, isEditProfileForm, isGetIdUser, onClickDeletUserBtn, onSubmiteEditProfeileForm } =
    props;
  const dispatch = useAppDispatch();
  const isSignUpForm = label === 'sign up Form';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const onSubmit = async (data: FormValues) => {
    dispatch(setLoader(true));
    setTimeout(() => {
      dispatch(refreshTokenThunk(data));
    }, 1000);
    isSignUpForm ? dispatch(signUpThunk(data)) : dispatch(signInThunk(data));
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit(isEditProfileForm ? onSubmiteEditProfeileForm! : onSubmit)}>
      {label}
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
              message: 'Login must be more than one letter A-z',
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
      {!isEditProfileForm && (
        <ButtonWrapper type="submit" disabled={!isValid} isValid={isValid}>
          Submit
        </ButtonWrapper>
      )}
      {isEditProfileForm && (
        <>
          <ButtonWrapper type="submit" disabled={isGetIdUser} isValid={isValid}>
            Submit
          </ButtonWrapper>
          <br />
          <ButtonWrapper
            onClick={onClickDeletUserBtn}
            disabled={!isGetIdUser}
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
