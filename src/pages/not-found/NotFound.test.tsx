import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should be rendering correctly ', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText(/Page not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back/i)).toHaveAttribute('href', '/main');
  });
});
