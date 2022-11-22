import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { apiSliceIinitState } from './apiInterfaces';
import { signInThunk } from './thunks/signInThunk';
import { signUpThunk } from './thunks/signUpThunk';

const initialState: apiSliceIinitState = {
  authorised: false,
  errorApiMessage: '',
  userName: JSON.parse(localStorage.getItem('user-name') || '""'),
  idLoggedUser: '',
  token: '',
  userSignUpData: {
    id: '',
    name: '',
    login: '',
  },
  deleteStatusMessage: '',
  loading: false,
};
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserSignUpData: (state, action) => {
      state.userSignUpData = action.payload;
    },
    setAuthorised: (state, action) => {
      state.authorised = action.payload;
    },
    setErrorApiMessage: (state, action) => {
      state.errorApiMessage = action.payload;
    },
    setIdLoggedUser: (state, action) => {
      state.idLoggedUser = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem('user-name', JSON.stringify(state.userName));
    },
    setDeleteStatusMessage: (state, action) => {
      state.deleteStatusMessage = action.payload;
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInThunk.fulfilled, (state) => {
        state.userName && (state.authorised = true);
      })
      .addCase(signUpThunk.fulfilled, (state) => {
        const isSignUpData = Object.values(state.userSignUpData).every((item) => item);
        if (isSignUpData) {
          state.authorised = true;
        }
      });
  },
});
export const {
  setToken,
  setUserSignUpData,
  setAuthorised,
  setErrorApiMessage,
  setUserName,
  setIdLoggedUser,
  setDeleteStatusMessage,
  setLoader,
} = apiSlice.actions;
export const selectApi = (state: RootState) => state.api;
export default apiSlice.reducer;
