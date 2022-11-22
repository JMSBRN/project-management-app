import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';

describe('<Link />', () => {
  it('should be rendered correctly', () => {
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
