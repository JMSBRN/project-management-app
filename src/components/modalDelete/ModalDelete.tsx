import { Flex } from 'pages/boards/Boards.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, DeleteForm, DeleteWrapper, Img } from './ModalDelete.style';

interface ModalDelete {
  setisDelete: (arg0: boolean) => void;
  setDelete: (arg0: boolean) => void;
}

const ModalDelete = (props: ModalDelete) => {
  const navigate = useNavigate();
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
              navigate(-1);
            }}
          >
            Ok
          </Button>
          <Button
            onClick={() => {
              props.setisDelete(false);
              navigate(-1);
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
