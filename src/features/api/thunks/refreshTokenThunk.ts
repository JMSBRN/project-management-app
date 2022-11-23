import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormValues } from 'components/form/Form';
import { setTimeFromToken } from 'utils/apiUtils';
import { Api } from '../apiConstants';
import { setSignOut } from '../ApiSlice';

export const refreshTokenThunk = createAsyncThunk(
  'api/refresh-token',
  async (data: FormValues, { dispatch }) => {
    const timeFromFirstToken = await setTimeFromToken(data);
    const interval = setInterval(async () => {
      const currentTime = await setTimeFromToken(data);
      const totalIntervals = 1;
      const expired = currentTime - timeFromFirstToken < totalIntervals;
      const isExpiredTime = !!timeFromFirstToken && expired;
      if (!isExpiredTime) {
        clearInterval(interval);
        dispatch(setSignOut());
      }
    }, Api.MILLISECONDS_IN_A_MINUTE);
  }
);
