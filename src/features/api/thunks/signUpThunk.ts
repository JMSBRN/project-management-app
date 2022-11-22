import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'features/user/userInterfaces';
import { signUp } from 'utils/apiUtils';
import { setUserSignUpData, setErrorApiMessage, setLoader } from '../ApiSlice';

export const signUpThunk = createAsyncThunk(
  'api/sign-up-user',
  async (user: IUser, { dispatch }) => {
    const data = signUp(user);
    const userSignUpData = await data;
    if (userSignUpData.name) {
      dispatch(setUserSignUpData(userSignUpData));
    } else {
      const message = await data;
      dispatch(setErrorApiMessage(message));
      setTimeout(() => {
        dispatch(setErrorApiMessage(''));
      }, 3000);
    }
    userSignUpData && dispatch(setLoader(false));
  }
);
