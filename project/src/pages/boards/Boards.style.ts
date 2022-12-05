import styled from 'styled-components';
import plus from '../../assets/img/plus.png';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

export const Input = styled.input`
  width: 300px;
  margin: 30px auto;
  padding: 6px;
  border-radius: 7px;
  ::-webkit-input-placeholder {
    color: black;
  }
`;

export const BoardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
`;

export interface IBoardWrapper {
  children: JSX.Element | JSX.Element[];
}

export const BoardWrapper = styled.div<IBoardWrapper>`
  width: 300px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 30px;
  padding: 10px;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  width: 200px;
`;

export const Description = styled.div`
  width: 250px;
  height: 45px;
  overflow-y: hidden;
  word-wrap: break-word;
`;

interface IIcons {
  img: string;
}

export const Icons = styled.div<IIcons>`
  width: 20px;
  height: 20px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100%;
  margin: 2px;
  cursor: pointer;
  :hover {
    width: 24px;
    height: 24px;
    margin: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewBoardWrapper = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  margin: 30px;
`;

export const NewBoard = styled.div`
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
