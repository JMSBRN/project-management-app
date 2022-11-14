import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IUser } from "features/api/apiUtils";

interface IInitState {
  isLogin: boolean;
  user: IUser;
}
const initialState: IInitState = {
  isLogin: false,
  user: {
    name: "",
    login: "",
    password: "",
  },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setIsLogin, setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
