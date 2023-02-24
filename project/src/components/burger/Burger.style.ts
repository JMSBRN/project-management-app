import styled from 'styled-components';
import burgerPng from '../../assets/img/burger.png';

interface IProps {
  trigger: boolean;
}

export const BurgerWrapper = styled.div<IProps>`
  width: 35px;
  height: 35px;
  display: none;
  position: absolute;
  right: 1%;
  background-image: url(${burgerPng});
  background-size: 100%;
  cursor: pointer;
  :active {
    background-color: red;
  }
  @media (max-width: 650px) {
    transform: ${(props) => (props.trigger ? 'rotate(90deg)' : 'rotate(0);')};
    transition: 0.7s;
    display: block;
    z-index: 1;
  }
`;
