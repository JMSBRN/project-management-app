import { Flex } from 'pages/boards/Boards.style';
import React from 'react';
import { Button, DeleteForm, Delete, Img } from './ModalDelete.style';

interface ModalDelete {
  setisDelete: (arg: boolean) => void;
  setDelete?: (arg: boolean) => void;
  deleteTasks?: boolean;
  deleteBoards?: (arg: number) => void;
  boardId?: number | null;
  delColumn?: () => void;
  deleteTask?: () => void;
}

const ModalDelete = (props: ModalDelete) => {
  const { setisDelete, deleteTask, deleteTasks, deleteBoards, boardId, setDelete, delColumn } =
    props;
  return (
    <Delete>
      <DeleteForm>
        <Img />
        <div>Delete?</div>
        <Flex>
          <Button
            onClick={() => {
              if (boardId || boardId === 0) {
                deleteBoards!(boardId!);
                setisDelete(false);
              } else if (setDelete) {
                setDelete!(true);
              } else {
                deleteTasks ? deleteTask!() : delColumn!();
              }
              setisDelete(false);
            }}
          >
            Ok
          </Button>
          <Button
            onClick={() => {
              setisDelete(false);
            }}
          >
            Cansel
          </Button>
        </Flex>
      </DeleteForm>
    </Delete>
  );
};

export default ModalDelete;
