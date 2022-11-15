import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 300px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  border-radius: 15px;
  border: 1px solid white;
`;

export const InputWrapper = styled.input`
  padding: 6px;
  border-radius: 7px;
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.button`
  border-radius: 7px;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px 15px;
  margin: 1.5px;
  cursor: pointer;
  :hover {
    font-size: 19px;
    color: white;
    background: #43c6ac;
    transition: 0.6s;
    padding: 6px 16.5px;
    margin: 0;
  }
`;
