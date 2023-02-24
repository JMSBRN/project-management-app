import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Burger from './Burger';

const changeBurgerMenu = () => {
  return true;
};

describe('<Burger />', () => {
  it('should be rendering correctly with props ', () => {
    render(
      <MemoryRouter>
        <Burger trigger={true} changeBurgerMenu={changeBurgerMenu} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('burger')).toBeInTheDocument();
  });
});
