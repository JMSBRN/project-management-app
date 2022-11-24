import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt } from 'utils/apiUtils';
import { setLoggedUserId } from '../ApiSlice';

export const getUserIdThunk = createAsyncThunk(
  'api/get-id-user',
  async (user: IUser, { dispatch }) => {
    delete user.name;
    await signIn(user).then((data) => {
      if (data.token) {
        const loggedUserData = getParsedJwt(data.token);
        loggedUserData && dispatch(setLoggedUserId(loggedUserData.userId as string));
      }
    });
  }
);
