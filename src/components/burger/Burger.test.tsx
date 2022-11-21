import { render, screen } from '@testing-library/react';
import React from 'react';
import Burger from './Burger';

const changeBurgerMenu = () => {
  return true;
};

describe('<Link />', () => {
  it('should be ', () => {
    render(<Burger burger={true} changeBurgerMenu={changeBurgerMenu} />);
  });
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
