import { IColumns, IData } from 'pages/boards/board/Board';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Close, ColumnFormWrapper, Form, Input, Label } from './ColumnForm.style';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    const items: never[] = [];
    const column = { ...data, items };
    columns.splice(columnId!, 1, column);
    setchangeColumn(false);
  };
  return (
    <ColumnFormWrapper>
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
    </ColumnFormWrapper>
  );
};
export default ColumnForm;
