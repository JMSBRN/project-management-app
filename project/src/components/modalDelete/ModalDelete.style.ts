import styled from 'styled-components';
import img from '../../assets/img/question.png';

export const Delete = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backdrop-filter: blur(5px);
`;

export const DeleteForm = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 15px;
  border: 1px solid white;
`;

export const Img = styled.div`
  width: 80px;
  height: 80px;
  background: url(${img});
  background-size: 100%;
  filter: invert();
`;

export const Button = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 20px;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
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
