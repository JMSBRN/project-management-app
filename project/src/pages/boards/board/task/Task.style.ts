import styled from 'styled-components';

export const TaskInformation = styled.div`
  width: 280px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #ccffff;
  background: #43c6ac;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  width: 220px;
  font-size: 20px;
  overflow-wrap: anywhere;
  margin-bottom: 10px;
`;

export const IconsWrapperTask = styled.div`
  display: flex;
  filter: invert();
`;

export const Message = styled.div`
  overflow-wrap: anywhere;
  display: flex;
`;
