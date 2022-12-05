import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, signUp } from 'utils/apiUtils';
import { setUserSignUpData, setErrorApiMessage, setLoader } from '../ApiSlice';

export const signUpThunk = createAsyncThunk(
  'api/sign-up-user',
  async (user: IUser, { dispatch }) => {
    const { login, password } = user;
    await signIn({ login: login, password: password }).then(async ({ token }) => {
      if (token) {
        dispatch(setErrorApiMessage('User is Already exist! Please try another name or login.'));
        setTimeout(() => {
          dispatch(setErrorApiMessage(''));
        }, 3000);
        dispatch(setLoader(false));
        return;
      } else {
        await signUp(user).then(({ name, message, id, login }) => {
          if (name) {
            dispatch(setUserSignUpData({ id, login, name }));
          } else {
            dispatch(setErrorApiMessage(message));
            setTimeout(() => {
              dispatch(setErrorApiMessage(''));
            }, 3000);
          }
          dispatch(setLoader(false));
        });
      }
    });
    dispatch(setLoader(false));
  }
);
