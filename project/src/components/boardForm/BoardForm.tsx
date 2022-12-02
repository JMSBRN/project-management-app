import { useAppDispatch } from 'app/hooks';
import { addBoard, changeBoard } from 'features/boards/BoardsSlice';
import { IBoard, IColumns } from 'pages/boards/Boards';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BoardFormWrapper, Button, Close, Form, Input, Label } from './BoardForm.style';

interface IProps {
  setchangeBoard: (arg0: boolean) => void;
  boardId: number | null;
  boards: IBoard[];
}

export interface FormValuesBoard {
  id: number;
  title: string;
  text: string;
  columns: IColumns[];
}

const BoardForm = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { boardId, boards, setchangeBoard } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesBoard>();
  const onSubmit = (data: FormValuesBoard) => {
    if (boardId !== null && boardId > boards.length) {
      data.columns = [];
      dispatch(addBoard(data));
    } else if (boardId !== null && boardId <= boards.length) {
      data.columns = boards[boardId].columns;
      dispatch(changeBoard({ data, boardId }));
    }
    setchangeBoard(false);
  };
  return (
    <BoardFormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setchangeBoard(false)} />
        <Label>
          Title
          <Input
            type="text"
            {...register('title', {
              required: 'enter title',
            })}
          />
          <div>{errors?.title && errors.title.message}</div>
        </Label>
        <Label>
          Description
          <Input
            type="text"
            {...register('text', {
              required: 'enter description',
            })}
          />
          <div>{errors?.text && errors.text.message}</div>
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </BoardFormWrapper>
  );
};
export default BoardForm;
