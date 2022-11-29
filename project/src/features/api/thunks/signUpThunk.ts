import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signUp } from 'utils/apiUtils';
import { setUserSignUpData, setErrorApiMessage, setLoader } from '../ApiSlice';

export const signUpThunk = createAsyncThunk(
  'api/sign-up-user',
  async (user: IUser, { dispatch }) => {
    await signUp(user).then(({ name, message, id, login }) => {
      if (name) {
        dispatch(setUserSignUpData({ id, login, name }));
      } else {
        dispatch(setErrorApiMessage({ message }));
        setTimeout(() => {
          dispatch(setErrorApiMessage(''));
        }, 3000);
      }
      dispatch(setLoader(false));
    });
  }
);
