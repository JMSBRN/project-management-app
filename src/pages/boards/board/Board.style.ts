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
  width: 250px;
  height: 60px;
  position: relative;
  background: white;
  border-radius: 10px;
  margin: 1em;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const Title = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

export const Tasks = styled.div`
  background: white;
  border-radius: 10px;
  padding: 5px;
`;

export const NewColumnWrapper = styled.div`
  width: 250px;
  height: 120px;
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
