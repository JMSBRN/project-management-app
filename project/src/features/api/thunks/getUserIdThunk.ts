import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt } from 'utils/apiUtils';
import { setLoggedUserId } from '../ApiSlice';

export const getUserIdThunk = createAsyncThunk(
  'api/get-id-user',
  async (user: IUser, { dispatch }) => {
    await signIn(user).then(({ token }) => {
      if (token) {
        const loggedUserData = getParsedJwt(token);
        loggedUserData && dispatch(setLoggedUserId(loggedUserData.id as string));
      }
    });
  }
);
