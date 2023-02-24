import styled from 'styled-components';

export const EditProfileWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ErrorMessageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backdrop-filter: blur(5px);
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
