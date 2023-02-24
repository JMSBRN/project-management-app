import { render, screen } from '@testing-library/react';
import { store } from 'app/store';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import EditProfile from './EditProfile';

describe('<EditProfile />', () => {
  it('should be rendering correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EditProfile />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/edit profile form/i)).toBeInTheDocument();
  });
});
