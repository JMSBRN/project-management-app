import styled from 'styled-components';

export const BoardFormWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backdrop-filter: blur(5px);
`;

export const FormWrapper = styled.form`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  border-radius: 15px;
  border: 1px solid white;
`;

export const InputWrapper = styled.input`
  width: 250px;
  display: block;
  margin: 0 auto;
  padding: 6px;
  border-radius: 7px;
`;

export const LabelWrapper = styled.div`
  div {
    width: 250px;
    height: 38px;
    color: red;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const ButtonWrapper = styled.button`
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
