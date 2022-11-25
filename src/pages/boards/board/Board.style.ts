import styled from 'styled-components';
import plus from '../../../assets/img/plus.png';

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  padding-top: 90px;
  overflow-y: hidden;
`;

export const TaskColumnStyles = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  justify-content: start;
`;

export const TaskList = styled.div`
  width: 310px;
  height: 60px;
  position: relative;
  background: white;
  border-radius: 10px;
  margin: 1em;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 5px;
  top: 5px;
`;

export const Title = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

export const Tasks = styled.div`
  max-height: 400px;
  overflow-y: auto;
  background: white;
  border-radius: 10px;
  padding: 5px;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #43c6ac;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
  }
`;

export const NewColumnWrapper = styled.div`
  width: 250px;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  margin: 1em;
`;

export const NewColumn = styled.div`
  width: 70px;
  height: 70px;
  background: url(${plus});
  background-size: 100%;
  transition: 0.7s;
  cursor: pointer;
  :hover {
    width: 80px;
    height: 80px;
  }
`;

export const NewTaskWrapper = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  div {
    cursor: pointer;
  }
`;

export const NewTask = styled.div`
  width: 40px;
  height: 40px;
  background: url(${plus});
  background-size: 100%;
  transition: 0.7s;
  margin: 5px;
  cursor: pointer;
  :hover {
    width: 50px;
    height: 50px;
    margin: 0;
  }
`;
