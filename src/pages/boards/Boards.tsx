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
import deleteBoardImg from '../../assets/img/delete.png';
import ModalDelete from 'components/modalDelete/ModalDelete';
import BoardForm from 'components/boardForm/BoardForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setBoardsBtns } from 'features/api/ApiSlice';
import { boardsSelect, newBoardId, deleteBoard } from 'features/boards/BoardsSlice';

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
  const { boards, boardId } = useAppSelector(boardsSelect);
  const navigate = useNavigate();
  const [changeBoard, setchangeBoard] = useState(false);
  const [isDelete, setisDelete] = useState(false);

  const deleteBoards = (id: number) => {
    const newBoardsArr = boards.filter((n, index) => {
      return index !== id;
    });
    dispatch(deleteBoard(newBoardsArr));
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
              <Board
                onClick={() => {
                  navigate('/board');
                  dispatch(newBoardId(index));
                }}
              >
                <Title>{item.title}</Title>
                <Description>{item.text}</Description>
              </Board>
              <div>
                <Icons
                  img={editBoard}
                  onClick={() => {
                    setchangeBoard(true);
                    dispatch(newBoardId(index));
                  }}
                />
                <Icons
                  img={deleteBoardImg}
                  onClick={() => {
                    setisDelete(true);
                    dispatch(newBoardId(index));
                  }}
                />
              </div>
            </BoardWrapper>
          );
        })}
        <NewBoardWrapper
          onClick={() => {
            setchangeBoard(true);
            dispatch(newBoardId(boards.length + 1));
          }}
        >
          <NewBoard />
        </NewBoardWrapper>
        {changeBoard && (
          <BoardForm setchangeBoard={setchangeBoard} boardId={boardId} boards={boards} />
        )}
        {isDelete && (
          <ModalDelete deleteBoards={deleteBoards} boardId={boardId} setisDelete={setisDelete} />
        )}
      </BoardsWrapper>
    </Wrapper>
  );
};

export default Boards;
