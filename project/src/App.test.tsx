import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('<App /> should be rendered correctly', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.getByTestId('app')).toBeInTheDocument();
});
