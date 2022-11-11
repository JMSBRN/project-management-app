import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface IInitState {
  isLogin: boolean;
}
const initialState: IInitState = {
  isLogin: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      console.log(state.isLogin);
    },
  },
});
export const { setIsLogin } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
