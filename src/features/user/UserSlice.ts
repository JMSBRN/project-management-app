import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IUser } from 'features/api/apiUtils';

interface IInitState {
  user: IUser;
}
const initialState: IInitState = {
  user: {
    login: '',
    password: '',
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
