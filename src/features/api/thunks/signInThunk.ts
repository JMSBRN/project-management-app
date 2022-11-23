import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt, getUserName } from 'utils/apiUtils';
import { setErrorApiMessage, setToken, setAuthorised, setUserName, setLoader } from '../ApiSlice';

export const signInThunk = createAsyncThunk(
  'api/sign-in-user',
  async (user: IUser, { dispatch }) => {
    await signIn(user).then(async (data) => {
      dispatch(setErrorApiMessage(data.message));
      if (data.token) {
        dispatch(setToken(data.token));
        dispatch(setAuthorised(true));
        const loggedUserData = getParsedJwt(data.token);
        const name = await getUserName(loggedUserData?.userId as string);
        dispatch(setUserName(name));
      } else if (data.message) {
        dispatch(setErrorApiMessage(data.message as string));
        setTimeout(() => {
          dispatch(setErrorApiMessage(''));
        }, 3000);
      }
      dispatch(setLoader(false));
    });
  }
);
