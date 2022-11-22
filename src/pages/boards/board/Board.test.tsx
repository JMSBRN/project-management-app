import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Board from './Board';

describe('<Board />', () => {
  it('should be rendering correctly ', () => {
    render(
      <MemoryRouter>
        <Board />
      </MemoryRouter>
    );
    expect(screen.getByTestId('board')).toBeInTheDocument();
  });
});
