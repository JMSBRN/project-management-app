import React from 'react';
import { IColumns, IData } from 'pages/boards/Boards';
import { useForm } from 'react-hook-form';
import { Button, Close, Column, Form, Input, Label } from './ColumnForm.style';
import { useAppDispatch } from 'app/hooks';
import { addColumns } from 'features/boards/BoardsSlice';

interface IProps {
  setchangeColumn: (arg0: boolean) => void;
  columnId: number | null;
  columns: IColumns[];
}

interface FormValues {
  title: string;
  items: IData[] | [];
}

const ColumnForm = (props: IProps) => {
  const { columnId, columns, setchangeColumn } = props;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    if (columnId! > columns.length) {
      const items: never[] = [];
      const column = { ...data, items };
      const newColumns = [...columns];
      newColumns.splice(columnId!, 1, column);
      dispatch(addColumns({ newColumns }));
    } else if (columns[columnId!].items.length >= 0) {
      const items = [...columns[columnId!].items];
      const column = { ...data, items };
      const newColumns = [...columns];
      newColumns.splice(columnId!, 1, column);
      dispatch(addColumns({ newColumns }));
    }
    setchangeColumn(false);
  };
  return (
    <Column>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setchangeColumn(false)} />
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
        <Button type="submit">Submit</Button>
      </Form>
    </Column>
  );
};
export default ColumnForm;
