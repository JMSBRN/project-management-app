import React, { useEffect, useState } from 'react';
import {
  Board,
  BoardsWrapper,
  BoardWrapper,
  Description,
  Icons,
  NewBoard,
  NewBoardWrapper,
  Title,
  Wrapper,
} from './Boards.style';
import editBoard from '../../assets/img/edit.png';
import deleteBoard from '../../assets/img/delete.png';
import ModalDelete from 'components/modalDelete/ModalDelete';
import BoardForm from 'components/boardForm/BoardForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setBoardsBtns } from 'features/api/ApiSlice';
import { boardsSelect, newBoards } from 'features/boards/BoardsSlice';

export interface IBoard {
  title: string;
  text: string;
  columns: IColumns[];
}

export interface IData {
  id: string;
  Task: string;
  message: string;
}

export interface IColumns {
  title: string;
  items: IData[] | [];
}

export function getRandomID() {
  return (Math.random() + 1).toString(36).substring(7);
}

const Boards = () => {
  const dispatch = useAppDispatch();
  const { boards } = useAppSelector(boardsSelect);
  const navigate = useNavigate();
  const [changeBoard, setchangeBoard] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [boardId, setBoardId] = useState<null | number>(null);

  const deleteBoards = (id: number) => {
    const newBoardsArr = boards.filter((n, index) => {
      return index !== id;
    });
    dispatch(newBoards(newBoardsArr));
  };

  useEffect(() => {
    dispatch(setBoardsBtns(true));
  }, [dispatch]);

  return (
    <Wrapper>
      <BoardsWrapper>
        {boards.map((item: IBoard, index: number) => {
          return (
            <BoardWrapper key={index}>
              <Board onClick={() => navigate('/board', { state: { boards, index } })}>
                <Title>{item.title}</Title>
                <Description>{item.text}</Description>
              </Board>
              <div>
                <Icons
                  img={editBoard}
                  onClick={() => {
                    setchangeBoard(true);
                    setBoardId(index);
                  }}
                />
                <Icons
                  img={deleteBoard}
                  onClick={() => {
                    setisDelete(true);
                    setBoardId(index);
                  }}
                />
              </div>
            </BoardWrapper>
          );
        })}
        <NewBoardWrapper
          onClick={() => {
            setchangeBoard(true);
            setBoardId(boards.length + 1);
          }}
        >
          <NewBoard />
        </NewBoardWrapper>
        {changeBoard && (
          <BoardForm setchangeBoard={setchangeBoard} boardId={boardId} boards={boards} />
        )}
        {isDelete && (
          <ModalDelete
            setBoardId={setBoardId}
            deleteBoards={deleteBoards}
            boardId={boardId}
            setisDelete={setisDelete}
          />
        )}
      </BoardsWrapper>
    </Wrapper>
  );
};

export default Boards;
