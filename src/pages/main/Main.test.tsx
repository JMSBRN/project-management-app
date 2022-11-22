import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

describe('<Main />', () => {
  it('should be ', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
