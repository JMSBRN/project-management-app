import React from 'react';
import { BurgerWrapper } from './Burger.style';

interface IProps {
  changeBurgerMenu(): void;
  trigger: boolean;
}

const Burger = (props: IProps) => {
  const { trigger, changeBurgerMenu } = props;
  return (
    <BurgerWrapper data-testid="burger" trigger={trigger} onClick={() => changeBurgerMenu()} />
  );
};

export default Burger;
