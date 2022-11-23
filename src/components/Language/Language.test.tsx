import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Language from './Language';

describe('<Language />', () => {
  it('should be rendering correctly ', () => {
    render(
      <MemoryRouter>
        <Language />
      </MemoryRouter>
    );
    expect(screen.getByText(/En/i)).toBeInTheDocument();
    expect(screen.getByText(/Ru/i)).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
  });
});
