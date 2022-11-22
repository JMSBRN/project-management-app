import React from 'react';
import { useAppDispatch } from 'app/hooks';
import { setLoader, setAuthorised, setUserName, setToken } from 'features/api/ApiSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonWrapper, FormWrapper, InputWrapper, LabelWrapper } from './Form.style';
import { signIn, getTimeFromToken } from 'utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import { Api } from 'features/api/apiConstants';
import { signInThunk } from 'features/api/thunks/signInThunk';
import { signUpThunk } from 'features/api/thunks/signUpThunk';

interface IFormProps {
  label: string;
  isEditProfileForm?: boolean;
  onClickDeletUserBtn?: () => void;
  onSumiteEditProfeileForm?: SubmitHandler<FormValues>;
  isGetIdUser?: boolean;
}
export interface FormValues {
  name: string;
  login: string;
  password: string;
}

const Form = (props: IFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSignUpForm = props.label === 'sign up Form';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const setTimeFromToken = async (data: FormValues) => {
    const res = await signIn(data);
    const userData = await res;
    const currentToken = await userData.token;
    const time: number = await getTimeFromToken(currentToken);
    return time;
  };
  const onSubmit = async (data: FormValues) => {
    dispatch(setLoader(true));
    const timeFromFirstToken = await setTimeFromToken(data);
    const interval = setInterval(async () => {
      const currentTime = await setTimeFromToken(data);
      const totalIntervals = 1;
      const expired = currentTime - timeFromFirstToken < totalIntervals;
      const isExpiredTime = !!timeFromFirstToken && expired;
      if (!isExpiredTime) {
        clearInterval(interval);
        dispatch(setAuthorised(false));
        dispatch(setToken(''));
        dispatch(setUserName(''));
        localStorage.removeItem('user-name');
        navigate('/');
      }
    }, Api.MILLISECONDS_IN_A_MINUTE);

    isSignUpForm ? dispatch(signUpThunk(data)) : dispatch(signInThunk(data));
    reset();
  };
  return (
    <FormWrapper
      onSubmit={handleSubmit(props.isEditProfileForm ? props.onSumiteEditProfeileForm! : onSubmit)}
    >
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
      {!props.isEditProfileForm && (
        <ButtonWrapper type="submit" disabled={!isValid} isValid={isValid}>
          Submit
        </ButtonWrapper>
      )}
      {props.isEditProfileForm && (
        <>
          <ButtonWrapper type="submit" disabled={props.isGetIdUser} isValid={isValid}>
            Submit
          </ButtonWrapper>
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
