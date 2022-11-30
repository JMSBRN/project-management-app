import { Flex } from 'pages/boards/Boards.style';
import React from 'react';
import { Button, DeleteForm, Delete, Img } from './ModalDelete.style';

interface ModalDelete {
  setDeleteItem?: React.Dispatch<React.SetStateAction<string>>;
  setisDelete: (arg: boolean) => void;
  setDelete?: (arg: boolean) => void;
  deleteTasks?: boolean;
  deleteBoards?: (arg: number) => void;
  boardId?: number | null;
  setBoardId?: React.Dispatch<React.SetStateAction<number | null>>;
}

const ModalDelete = (props: ModalDelete) => {
  const { setBoardId, setisDelete, setDeleteItem, deleteTasks, deleteBoards, boardId, setDelete } =
    props;
  return (
    <Delete>
      <DeleteForm>
        <Img />
        <div>Delete?</div>
        <Flex>
          <Button
            onClick={() => {
              if (setBoardId) {
                deleteBoards!(boardId!);
                setBoardId!(null);
              } else if (setDelete) {
                setDelete!(true);
              } else {
                deleteTasks ? setDeleteItem!('task') : setDeleteItem!('column');
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
