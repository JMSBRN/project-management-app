import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt, getLoggedUserByIdName } from 'utils/apiUtils';
import { setErrorApiMessage, setToken, setAuthorised, setUserName, setLoader } from '../ApiSlice';

export const signInThunk = createAsyncThunk(
  'api/sign-in-user',
  async (user: IUser, { dispatch }) => {
    await signIn(user).then((data) => {
      dispatch(setErrorApiMessage(data.message));
      if (data.token) {
        dispatch(setToken(data.token));
        dispatch(setAuthorised(true));
        const loggedUserData = getParsedJwt(data.token);
        const id = loggedUserData && loggedUserData.userId;
        getLoggedUserByIdName(id as string).then((name) => {
          dispatch(setUserName(name));
        });
      } else if (data.message) {
        const message = data.message;
        dispatch(setErrorApiMessage(message));
        setTimeout(() => {
          dispatch(setErrorApiMessage(''));
        }, 3000);
      }
      dispatch(setLoader(false));
    });
  }
);
