import { screen } from '@testing-library/react';
import { store } from 'app/store';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from 'utils/testUtils';
import Header from './Header';

describe('<Header />', () => {
  it('should be ', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header isAuth={false} />
      </MemoryRouter>,
      { store }
    );
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
