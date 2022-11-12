import styled from "styled-components";
import burger from "../../assets/img/burger.png";

interface IProps {
  burger: boolean;
}

export const BurgerWrapper = styled.div<IProps>`
  width: 35px;
  height: 35px;
  display: none;
  position: absolute;
  right: 1%;
  background-image: url(${burger});
  background-size: 100%;
  cursor: pointer;
  :active {
    background-color: red;
  }
  @media (max-width: 650px) {
    transform: ${(props) => (props.burger ? "rotate(90deg)" : "rotate(0);")};
    transition: 0.7s;
    display: block;
    z-index: 1;
  }
`;
