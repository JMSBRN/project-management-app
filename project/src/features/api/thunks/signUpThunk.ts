import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signUp } from 'utils/apiUtils';
import { setUserSignUpData, setErrorApiMessage, setLoader, setRegistered } from '../ApiSlice';

export const signUpThunk = createAsyncThunk(
  'api/sign-up-user',
  async (user: IUser, { dispatch }) => {
    await signUp(user).then((data) => {
      if (data.name) {
        dispatch(setUserSignUpData(data.name));
        dispatch(setRegistered(true));
      } else {
        dispatch(setErrorApiMessage(data.message));
        setTimeout(() => {
          dispatch(setErrorApiMessage(''));
        }, 3000);
      }
      dispatch(setLoader(false));
    });
  }
);
