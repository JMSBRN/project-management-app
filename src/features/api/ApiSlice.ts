import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { apiSignIn, apiSignUp, getParsedJwt, getUserById, IUser } from './apiUtils';

interface IUserSignUpData {
  id: string;
  name: string;
  login: string;
}
interface IinitState {
  isloggedIn: boolean;
  token: string;
  userSignUpData: IUserSignUpData;
  errorApiMessage: string;
}
const initialState: IinitState = {
  isloggedIn: false,
  errorApiMessage: '',
  token: localStorage.getItem('token') || "''",
  userSignUpData: {
    id: '',
    name: '',
    login: '',
  },
};
export const apiSliceSignIn = createAsyncThunk('api/sign-in-user', (user: IUser, { dispatch }) => {
  const data = apiSignIn(user);
  data.then((data) => {
    data.message && dispatch(setErrorApiMessage(data.message));
    if (data.token) {
      dispatch(setToken(data.token));
      dispatch(setIsLoggedIn(true));
      dispatch(setErrorApiMessage(''));
    }
  });
});
export const apiSliceSignUp = createAsyncThunk(
  'api/sign-up-user',
  async (user: IUser, { dispatch }) => {
    const data = apiSignUp(user);
    const userSignUpData = await data;
    dispatch(setUserSignUpData(userSignUpData));
  }
);
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.token !== undefined && localStorage.setItem('token', JSON.stringify(state.token));
    },
    setUserSignUpData: (state, action) => {
      state.userSignUpData = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isloggedIn = action.payload;
    },
    setErrorApiMessage: (state, action) => {
      state.errorApiMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(apiSliceSignIn.pending, () => {})
      .addCase(apiSliceSignIn.fulfilled, (state) => {
        console.log('fulfilled sign in ');
        const loggedUserData = getParsedJwt(state.token);
        const id = loggedUserData && loggedUserData.userId;
        const userDataById = getUserById(id as string);
        userDataById.then((userDataById) => {
          console.log(userDataById.name);
        });
      })
      .addCase(apiSliceSignIn.rejected, () => {})
      .addCase(apiSliceSignUp.fulfilled, (state) => {
        const isSignUpData = Object.values(state.userSignUpData).every((item) => item);
        if (isSignUpData) {
          console.log('you have successfully registered');
          state.isloggedIn = true;
        }
      });
  },
});
export const { setToken, setUserSignUpData, setIsLoggedIn, setErrorApiMessage } = apiSlice.actions;
export const selectApi = (state: RootState) => state.api;
export default apiSlice.reducer;
