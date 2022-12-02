import React from 'react';
import { useAppDispatch } from 'app/hooks';
import { setLoader } from 'features/api/ApiSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormWrapper, Input, Label } from './Form.style';
import { signInThunk } from 'features/api/thunks/signInThunk';
import { signUpThunk } from 'features/api/thunks/signUpThunk';
import { refreshTokenThunk } from 'features/api/thunks/refreshTokenThunk';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const isSignUpForm = label === `${t('main.auth.sign-up')}`;
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
    dispatch(refreshTokenThunk(data));
    isSignUpForm ? dispatch(signUpThunk(data)) : dispatch(signInThunk(data));
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit(isEditProfileForm ? onSubmiteEditProfeileForm! : onSubmit)}>
      {label}
      {isSignUpForm && (
        <Label>
          {t('main.auth.name-')}
          <Input
            type="text"
            {...register('name', {
              required: `${t('main.auth.name-input-required')}`,
              minLength: {
                value: 2,
                message: `${t('main.auth.name-input-msg-length')}`,
              },
              pattern: {
                value: /^[A-Z][-a-zA-Z]+$/,
                message: `${t('main.auth.name-input-msg-pattern')}`,
              },
            })}
          />
          <div>{errors?.name && errors.name.message}</div>
        </Label>
      )}
      <Label>
        {t('main.auth.login-')}
        <Input
          type="text"
          {...register('login', {
            required: `${t('main.auth.login-input-required')}`,
            minLength: {
              value: 2,
              message: `${t('main.auth.login-input-msg-length')}`,
            },
          })}
        />
        <div>{errors?.login && errors.login.message}</div>
      </Label>
      <Label>
        {t('main.auth.password-')}
        <Input
          type="password"
          {...register('password', {
            required: `${t('main.auth.password-input-required')}`,
            minLength: {
              value: 7,
              message: `${t('main.auth.password-input-msg-length')}`,
            },
          })}
        />
        <div>{errors?.password && errors.password.message}</div>
      </Label>
      {!isEditProfileForm && (
        <Button type="submit" disabled={!isValid} isValid={isValid}>
          {t('main.auth.submit-btn')}
        </Button>
      )}
      {isEditProfileForm && (
        <>
          <Button type="submit" disabled={isGetIdUser} isValid={isValid}>
            {t('main.auth.submit-btn')}
          </Button>
          <br />
          <Button
            onClick={onClickDeletUserBtn}
            disabled={!isGetIdUser}
            type="button"
            isValid={isValid}
          >
            {t('main.auth.delete-user-btn')}
          </Button>
        </>
      )}
    </FormWrapper>
  );
};
export default Form;
