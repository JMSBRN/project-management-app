import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signIn, getParsedJwt } from 'utils/apiUtils';
import { setIdLoggedUser } from '../ApiSlice';

export const getUserIdThunk = createAsyncThunk(
  'api/get-id-user',
  async (user: IUser, { dispatch }) => {
    const res = signIn(user);
    const data = await res;
    const token = data.token;
    const loggedUserData = getParsedJwt(token);
    const id = loggedUserData && loggedUserData.userId;
    dispatch(setIdLoggedUser(id));
  }
);
