import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteUser } from 'utils/apiUtils';
import { setDeleteStatusMessage } from '../ApiSlice';

export const deleteUserThunk = createAsyncThunk(
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
