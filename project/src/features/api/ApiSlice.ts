import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { apiSliceIinitState } from './apiInterfaces';
import { signUpThunk } from './thunks/signUpThunk';

const initialState: apiSliceIinitState = {
  authorised: false,
  errorApiMessage: '',
  userName: JSON.parse(localStorage.getItem('user-name') || '""'),
  loggedUserId: '',
  token: '',
  userSignUpData: {
    id: '',
    name: '',
    login: '',
  },
  deleteStatusMessage: '',
  loading: false,
  boardsBtns: false,
  registered: false,
};
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.authorised = !!action.payload;
    },
    setUserSignUpData: (state, action) => {
      state.userSignUpData = action.payload;
      const { name } = action.payload;
      state.registered = !!name;
    },
    setErrorApiMessage: (state, action) => {
      state.errorApiMessage = action.payload;
    },
    setLoggedUserId: (state, action) => {
      state.loggedUserId = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem('user-name', JSON.stringify(state.userName || ''));
    },
    setDeleteStatusMessage: (state, action) => {
      state.deleteStatusMessage = action.payload;
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setSignOut: (state) => {
      state.authorised = false;
      state.token = '';
      state.userName = '';
      localStorage.removeItem('user-name');
      state.loggedUserId = '';
      state.boardsBtns = false;
      state.registered = false;
    },
    setBoardsBtns: (state, action) => {
      state.boardsBtns = action.payload;
    },
    setRegistered: (state, action) => {
      state.registered = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpThunk.fulfilled, (state) => {
      const signUpDataProvided = Object.values(state.userSignUpData).every((item) => item);
      if (signUpDataProvided) {
        state.authorised = true;
      }
    });
  },
});
export const {
  setToken,
  setUserSignUpData,
  setErrorApiMessage,
  setUserName,
  setLoggedUserId,
  setDeleteStatusMessage,
  setLoader,
  setSignOut,
  setBoardsBtns,
  setRegistered,
} = apiSlice.actions;
export const selectApi = (state: RootState) => state.api;
export default apiSlice.reducer;
