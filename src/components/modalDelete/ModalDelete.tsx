import { Flex } from 'pages/boards/Boards.style';
import React from 'react';
import { Button, DeleteForm, DeleteWrapper, Img } from './ModalDelete.style';

interface ModalDelete {
  setDeleteItem?: React.Dispatch<React.SetStateAction<string>>;
  setisDelete: (arg0: boolean) => void;
  setDelete?: (arg0: boolean) => void;
  deleteTasks?: boolean;
}

const ModalDelete = (props: ModalDelete) => {
  const { setisDelete, setDeleteItem, deleteTasks, setDelete } = props;
  return (
    <DeleteWrapper>
      <DeleteForm>
        <Img />
        <div>Delete?</div>
        <Flex>
          <Button
            onClick={() => {
              if (setDelete) {
                setDelete(true);
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
    </DeleteWrapper>
  );
};

export default ModalDelete;
