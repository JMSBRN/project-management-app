import { Flex } from 'pages/boards/Boards.style';
import React from 'react';
import { Button, DeleteForm, DeleteWrapper, Img } from './ModalDelete.style';

interface ModalDelete {
  setisDelete: (arg0: boolean) => void;
  setDelete: (arg0: boolean) => void;
}

const ModalDelete = (props: ModalDelete) => {
  return (
    <DeleteWrapper>
      <DeleteForm>
        <Img />
        <div>Delete?</div>
        <Flex>
          <Button
            onClick={() => {
              props.setDelete(true);
              props.setisDelete(false);
            }}
          >
            Ok
          </Button>
          <Button
            onClick={() => {
              props.setisDelete(false);
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
