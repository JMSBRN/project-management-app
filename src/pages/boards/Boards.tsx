import React, { useEffect, useState } from 'react';
import {
  BardsWrapper,
  BoardWrapper,
  Description,
  Flex,
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

export interface IBoard {
  title: string;
  text: string;
}

const Boards = () => {
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
      <BardsWrapper>
        {boards.map((item, index) => {
          return (
            <BoardWrapper key={index}>
              <Flex>
                <Title>{item.title}</Title>
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
              </Flex>
              <Description>{item.text}</Description>
            </BoardWrapper>
          );
        })}
        {/* setBoards([...boards, { title: '', text: '' }]) */}
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
        {isDelete && <ModalDelete setisDelete={setisDelete} setDeleteBoard={setDeleteBoard} />}
      </BardsWrapper>
    </Wrapper>
  );
};

export default Boards;
