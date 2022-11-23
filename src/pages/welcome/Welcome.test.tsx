import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Welcome from './Welcome';

describe('<Welcome />', () => {
  it('should be rendering correctly ', () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    expect(screen.getByText(/Teem/i)).toBeInTheDocument();
  });
});
