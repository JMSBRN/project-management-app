import { IBoard } from 'pages/boards/Boards';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  BoardFormWrapper,
  ButtonWrapper,
  Close,
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
  const { BoardId, boards, setBoards, setchangeBoard } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    if (BoardId !== null && BoardId > boards.length) {
      data.id = BoardId;
    }
    const board = boards;
    board.splice(BoardId!, 1, data);
    setBoards(board);
    setchangeBoard(false);
  };
  return (
    <BoardFormWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setchangeBoard(false)} />
        <LabelWrapper>
          Title
          <InputWrapper
            type="text"
            {...register('title', {
              required: 'enter title',
            })}
          />
          <div>{errors?.title && errors.title.message}</div>
        </LabelWrapper>
        <LabelWrapper>
          Description
          <InputWrapper
            type="text"
            {...register('text', {
              required: 'enter description',
            })}
          />
          <div>{errors?.text && errors.text.message}</div>
        </LabelWrapper>
        <ButtonWrapper type="submit">Submit</ButtonWrapper>
      </FormWrapper>
    </BoardFormWrapper>
  );
};
export default BoardForm;
