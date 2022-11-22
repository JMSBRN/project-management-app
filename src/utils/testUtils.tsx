import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppStore, RootState, setupStore } from 'app/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';;
import { apiSliceIinitState } from 'features/api/apiInterfaces';
import { userSliceInitState } from 'features/user/userInterfaces';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}
export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: {} as userSliceInitState,
      api: {} as apiSliceIinitState,
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
