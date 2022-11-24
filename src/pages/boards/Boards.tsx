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

export interface IBoard {
  title: string;
  text: string;
}

const Boards = () => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState<IBoard[]>([
    { title: 'task', text: 'dsadfas' },
    {
      title: 'task',
      text: 'dsadfssss',
    },
    { title: 'task', text: 'dsadfasdadfawfaw' },
    { title: 'tasaSAsk', text: 'dsadfassaSAsdadfawfaw' },
    { title: 'tasaSAsk', text: 'dsadfassaSAsdadfawfaw' },
    { title: 'tasaSAsk', text: 'dsadfassaSAsdadfawfaw' },
  ]);
  const [changeBoard, setchangeBoard] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [DeleteBoard, setDeleteBoard] = useState(false);
  const [BoardId, setBoardId] = useState<null | number>(null);

  useEffect(() => {
    const deleteBoards = (id: number) => {
      if (DeleteBoard) {
        const newBoards = boards.filter((n, index) => {
          return index !== id;
        });
        setBoards(newBoards);
      }
    };
    if (DeleteBoard) {
      deleteBoards(BoardId!);
      setBoardId(null);
      setDeleteBoard(false);
    }
  }, [DeleteBoard, BoardId, boards]);

  return (
    <Wrapper>
      <BoardsWrapper>
        {boards.map((item, index) => {
          return (
            <BoardWrapper key={index}>
              <Board onClick={() => navigate('/board')}>
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
          <BoardForm
            setchangeBoard={setchangeBoard}
            BoardId={BoardId}
            boards={boards}
            setBoards={setBoards}
          />
        )}
        {isDelete && <ModalDelete setisDelete={setisDelete} setDelete={setDeleteBoard} />}
      </BoardsWrapper>
    </Wrapper>
  );
};

export default Boards;
