import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { getUsers } from "./apiUtils";

interface IUser {
  name: string;
}
interface IinitState {
  user: IUser;
}
const initialState: IinitState = {
  user: { name: "" },
};
export const apiAsyncgetUser = createAsyncThunk("api/get-user", () => {
  getUsers();
  console.log("ee");
});
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(apiAsyncgetUser.pending, () => {
        console.log("pending");
      })
      .addCase(apiAsyncgetUser.fulfilled, () => {
        console.log("fullFilled");
      })
      .addCase(apiAsyncgetUser.rejected, () => {
        console.log("rejected");
      });
  },
});
export const {} = apiSlice.actions;
export const selectApi = (state: RootState) => state.api;
export default apiSlice.reducer;
