import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt, getUserName } from 'utils/apiUtils';
import { setErrorApiMessage, setToken, setUserName, setLoader } from '../ApiSlice';

export const signInThunk = createAsyncThunk(
  'api/sign-in-user',
  async (user: IUser, { dispatch }) => {
    await signIn(user).then(async ({ message, token }) => {
      dispatch(setErrorApiMessage(message));
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(setToken(token));
        dispatch(setUserName(await getUserName(getParsedJwt(token)?.id as string, token)));
      } else if (message) {
        dispatch(setErrorApiMessage(message as string));
        setTimeout(() => {
          dispatch(setErrorApiMessage(''));
        }, 3000);
      }
      dispatch(setLoader(false));
    });
  }
);
