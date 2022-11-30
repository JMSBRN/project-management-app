import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 15px;
  border: 1px solid white;
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
    height: 38px;
    color: red;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

interface ISubmit {
  isValid: boolean;
}

export const Button = styled.button<ISubmit>`
  border-radius: 7px;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  :hover {
    color: ${(props) => (props.isValid ? 'white' : 'black')};
    background: ${(props) => (props.isValid ? '#43c6ac' : '#60938e')};
    transition: 0.6s;
    padding: ${(props) => (props.isValid ? '5px 20px' : '5px 15px')};
    margin: 0;
  }
`;
