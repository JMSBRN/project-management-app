import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Welcome from './Welcome';

describe('<Baords />', () => {
  it('should be ', () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    expect(screen.getByText(/Teem/i)).toBeInTheDocument();
  });
});
