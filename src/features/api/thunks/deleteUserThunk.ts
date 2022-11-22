import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteUser } from 'utils/apiUtils';
import { setDeleteStatusMessage } from '../ApiSlice';

export const deleteUserThunk = createAsyncThunk(
  'api/delete-user',
  async (id: string, { dispatch }) => {
    await deleteUser(id).then((data) => {
      dispatch(setDeleteStatusMessage(data));
      setTimeout(() => {
        dispatch(setDeleteStatusMessage(''));
      }, 3000);
    });
  }
);
