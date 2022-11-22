import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IUser } from 'features/user/userInterfaces';
import {
  apiSignIn,
  apiSignUp,
  deleteUser,
  getLoggedUserByIdName,
  getParsedJwt,
} from '../../utils/apiUtils';
import { apiSliceIinitState } from './apiInterfaces';

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
export const apiSliceSignIn = createAsyncThunk('api/sign-in-user', (user: IUser, { dispatch }) => {
  const data = apiSignIn(user);
  data.then((data) => {
    data.statusCode === 403 && dispatch(setErrorApiMessage(data.message));
    if (data.token) {
      dispatch(setToken(data.token));
      dispatch(setAuthorised(true));
      const loggedUserData = getParsedJwt(data.token);
      const id = loggedUserData && loggedUserData.userId;
      const userData = getLoggedUserByIdName(id as string);
      userData.then((name) => {
        dispatch(setUserName(name));
      });
    } else if (data.message) {
      const message = data.message;
      dispatch(setErrorApiMessage(message));
      setTimeout(() => {
        dispatch(setErrorApiMessage(''));
      }, 3000);
    }
    dispatch(setLoader(false));
  });
});
export const apiSliceSignUp = createAsyncThunk(
  'api/sign-up-user',
  async (user: IUser, { dispatch }) => {
    const data = apiSignUp(user);
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
export const apiSliceGetIdUser = createAsyncThunk(
  'api/get-id-user',
  async (user: IUser, { dispatch }) => {
    const res = apiSignIn(user);
    const data = await res;
    const token = data.token;
    const loggedUserData = getParsedJwt(token);
    const id = loggedUserData && loggedUserData.userId;
    dispatch(setIdLoggedUser(id));
  }
);
export const apiSliceDeleteUser = createAsyncThunk(
  'api/delete-user',
  async (id: string, { dispatch }) => {
    const res = deleteUser(id);
    const data = await res;
    dispatch(setDeleteStatusMessage(data));
    setTimeout(() => {
      dispatch(setDeleteStatusMessage(''));
    }, 3000);
  }
);
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
      .addCase(apiSliceSignIn.pending, () => {})
      .addCase(apiSliceSignIn.fulfilled, (state) => {
        state.userName && (state.authorised = true);
      })
      .addCase(apiSliceSignIn.rejected, () => {})
      .addCase(apiSliceSignUp.pending, () => {
        console.log('pending sign up');
      })
      .addCase(apiSliceSignUp.fulfilled, (state) => {
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
