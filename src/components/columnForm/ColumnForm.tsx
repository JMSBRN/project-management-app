import { IColumns, IData } from 'pages/boards/board/Board';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ButtonWrapper,
  Close,
  ColumnFormWrapper,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
} from './ColumnForm.style';

interface IProps {
  setchangeColumn: (arg0: boolean) => void;
  setColumns: (arg0: IColumns[]) => void;
  columnId: number | null;
  columns: IColumns[];
}

interface FormValues {
  title: string;
  items: IData[] | [];
}

const ColumnForm = (props: IProps) => {
  const { columnId, columns, setColumns, setchangeColumn } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    const column = columns;
    column.splice(columnId!, 1, data);
    setColumns(column);
    setchangeColumn(false);
  };
  return (
    <ColumnFormWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setchangeColumn(false)} />
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
        <ButtonWrapper type="submit">Submit</ButtonWrapper>
      </FormWrapper>
    </ColumnFormWrapper>
  );
};
export default ColumnForm;
