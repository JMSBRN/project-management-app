import styled from 'styled-components';

export const EditProfileWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ErrorMessage = styled.div`
  position: absolute;
  top: 300px;
  height: 20px;
  color: red;
`;
export const DeletedUserModal = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 400px;
  height: 400px;
  padding: 0 20px;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
export const Title = styled.div`
  font-size: 20px;
  color: #44a08d;
`;
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Btn = styled.div`
  padding: 6px;
  color: #44a08d;
  cursor: pointer;
  border: 1px solid grey;
  :active {
    background-color: red;
    color: white;
  }
`;
export const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px;
  color: #44a08d;
  cursor: pointer;
  border: 1px solid grey;
  :active {
    background-color: red;
    color: white;
  }
`;
