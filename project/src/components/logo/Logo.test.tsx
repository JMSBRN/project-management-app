import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';

describe('<Logo/>', () => {
  it('should be rendering correctly with props', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
  });
});
