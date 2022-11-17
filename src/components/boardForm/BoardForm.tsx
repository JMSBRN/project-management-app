import { IBoard } from 'pages/boards/Boards';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  BoardFormWrapper,
  ButtonWrapper,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
} from './BoardForm.style';

interface IProps {
  setchangeBoard: (arg0: boolean) => void;
  setBoards: (arg0: IBoard[]) => void;
  BoardId: number | null;
  boards: IBoard[];
}

interface FormValues {
  id: number;
  title: string;
  text: string;
}

const BoardForm = (props: IProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    if (props.BoardId !== null && props.BoardId > props.boards.length) {
      data.id = props.BoardId;
    }
    const board = props.boards;
    console.log(props.boards);
    board.splice(props.BoardId!, 1, data);
    props.setBoards(board);
    props.setchangeBoard(false);
  };
  return (
    <BoardFormWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          Title
          <InputWrapper type="text" {...register('title')} />
        </LabelWrapper>
        <LabelWrapper>
          Description
          <InputWrapper type="text" {...register('text')} />
        </LabelWrapper>
        <ButtonWrapper type="submit">Submit</ButtonWrapper>
      </FormWrapper>
    </BoardFormWrapper>
  );
};
export default BoardForm;
