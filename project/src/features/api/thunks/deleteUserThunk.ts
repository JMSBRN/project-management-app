import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteUser } from 'utils/apiUtils';
import { setDeleteStatusMessage } from '../ApiSlice';
interface IDeleteThunkProps {
  id: string;
  token: string;
}
export const deleteUserThunk = createAsyncThunk(
  'api/delete-user',
  async (object: IDeleteThunkProps, { dispatch }) => {
    const { id, token } = object;
    await deleteUser(id, token).then((data) => {
      dispatch(setDeleteStatusMessage(data));
      setTimeout(() => {
        dispatch(setDeleteStatusMessage(''));
      }, 3000);
    });
  }
);
