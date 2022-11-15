import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/img/girlAnime.png";

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  color: red;
  h1 {
    font-weight: 100;
    font-size: 40px;
    color: white;
    margin-bottom: 20px;
  }
  @media (max-width: 800px) {
    height: 90vh;
    h1 {
      font-size: 14px;
    }
  }
`;

export const NotFoundImg = styled.div`
  width: 350px;
  height: 450px;
  background: url(${img});
  background-size: 100%;
  margin: 38px;
  @media (max-width: 1000px) {
    width: 200px;
    height: 260px;
  }
`;

export const NotFoundLink = styled(Link)`
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 20px;
  text-decoration: none;
  transition: 0.5s;
  padding: 8px 10px;
  margin: 5px;
  :hover {
    color: white;
    padding: 8px 25px;
    background: #43c6ac;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
