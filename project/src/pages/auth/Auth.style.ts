import styled from 'styled-components';

export const AuthtWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: red;
  font-size: 25px;
  color: white;
  border-radius: 20px;
  padding: 70px;
`;

export const RegisterMessageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backdrop-filter: blur(5px);
`;

export const RegisterMessage = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  padding: 50px;
`;

export const RegisterMessageText = styled.p`
  width: 350px;
  flex-wrap: wrap;
  color: #43c6ac;
  font-size: 25px;
  margin-bottom: 20px;
`;
