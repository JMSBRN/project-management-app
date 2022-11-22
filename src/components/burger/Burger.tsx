import React from 'react';
import { BurgerWrapper } from './Burger.style';

interface IProps {
  changeBurgerMenu(): void;
  burger: boolean;
}

const Burger = (props: IProps) => {
  return (
    <BurgerWrapper
      data-testid="burger"
      burger={props.burger}
      onClick={() => props.changeBurgerMenu()}
    />
  );
};

export default Burger;
