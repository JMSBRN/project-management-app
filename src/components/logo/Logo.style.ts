import styled from "styled-components";
import logo from "../../assets/img/logo.png";

export const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-size: 100%;
  cursor: pointer;
  transition: 0.6s;
  margin-left: 50px;
  :hover {
    width: 43px;
    height: 43px;
  }
  @media (max-width: 650px) {
    margin-left: 7%;
  }
`;
