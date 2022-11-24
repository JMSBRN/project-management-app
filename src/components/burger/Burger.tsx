import React from 'react';
import { BurgerWrapper } from './Burger.style';

interface IProps {
  changeBurgerMenu(): void;
  burger: boolean;
}

const Burger = (props: IProps) => {
  const { burger, changeBurgerMenu } = props;
  return <BurgerWrapper data-testid="burger" burger={burger} onClick={() => changeBurgerMenu()} />;
};

export default Burger;
