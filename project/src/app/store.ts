import { configureStore, ThunkAction, Action, PreloadedState } from '@reduxjs/toolkit';
import userReducer from '../features/user/UserSlice';
import apiReducer from '../features/api/ApiSlice';
import rootReducer from '../app/reducers';
export const store = configureStore({
  reducer: {
    user: userReducer,
    api: apiReducer,
  },
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
