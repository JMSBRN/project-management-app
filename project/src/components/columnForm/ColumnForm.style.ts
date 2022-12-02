import styled from 'styled-components';
import close from '../../assets/img/close.png';

export const Column = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backdrop-filter: blur(5px);
`;

export const Form = styled.form`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  border-radius: 15px;
  border: 1px solid white;
`;

export const Close = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 2.5px;
  right: 12.5px;
  background: url(${close}) no-repeat;
  background-size: 100%;
  filter: invert();
  cursor: pointer;
  :hover {
    width: 30px;
    height: 30px;
    top: 0;
    right: 10px;
  }
`;

export const Input = styled.input`
  width: 250px;
  display: block;
  margin: 0 auto;
  padding: 6px;
  border-radius: 7px;
`;

export const Label = styled.div`
  div {
    width: 250px;
    height: 20px;
    color: red;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  border-radius: 7px;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  :hover {
    color: white;
    background: #43c6ac;
    transition: 0.7s;
    padding: 5px 20px;
  }
`;
