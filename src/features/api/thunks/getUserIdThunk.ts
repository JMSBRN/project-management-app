import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt } from 'utils/apiUtils';
import { setIdLoggedUser } from '../ApiSlice';

export const getUserIdThunk = createAsyncThunk(
  'api/get-id-user',
  async (user: IUser, { dispatch }) => {
    await signIn(user).then((data) => {
      if (data.token) {
        const loggedUserData = getParsedJwt(data.token);
        const id = loggedUserData && loggedUserData.userId;
        dispatch(setIdLoggedUser(id));
      }
    });
  }
);
