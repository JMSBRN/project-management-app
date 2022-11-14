import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface IinitState {
  formValues: string[];
}
const initialState: IinitState = {
  formValues: [],
};
export const apiSingIn = createAsyncThunk("api/get-user", () => {});
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.formValues = action.payload;
      console.log(state.formValues);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(apiSingIn.pending, () => {
        console.log("pending");
      })
      .addCase(apiSingIn.fulfilled, () => {
        console.log("fullFilled");
      })
      .addCase(apiSingIn.rejected, () => {
        console.log("rejected");
      });
  },
});
export const { setFormValues } = apiSlice.actions;
export const selectApi = (state: RootState) => state.api;
export default apiSlice.reducer;
