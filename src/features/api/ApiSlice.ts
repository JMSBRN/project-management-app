import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { apiSignIn, apiSignUp, IUser } from "./apiUtils";

interface IinitState {
  token: string;
}
const initialState: IinitState = {
  token: localStorage.getItem("token") || "''",
};
export const apiSliceSignIn = createAsyncThunk(
  "api/sign-in-user",
  (user: IUser, { dispatch }) => {
    const data = apiSignIn(user);
    data.then((data) => {
      dispatch(setToken(data.token));
    });
  }
);
export const apiSliceSignUp = createAsyncThunk(
  "api/sign-up-user",
  (user: IUser) => {
    const data = apiSignUp(user);
  }
);
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.token !== undefined &&
        localStorage.setItem("token", JSON.stringify(state.token));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(apiSliceSignIn.pending, () => {})
      .addCase(apiSliceSignIn.fulfilled, () => {})
      .addCase(apiSliceSignIn.rejected, () => {})
      .addCase(apiSliceSignUp.fulfilled, () => {
        console.log("fullFilled");
      });
  },
});
export const { setToken } = apiSlice.actions;
export const selectApi = (state: RootState) => state.api;
export default apiSlice.reducer;
