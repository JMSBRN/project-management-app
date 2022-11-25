import { getRandomID, IColumns, IData } from 'pages/boards/board/Board';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  BoardFormWrapper,
  ButtonWrapper,
  Close,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
} from './TaskForm.style';

interface IProps {
  tasksIdArr: number[];
  setChangeTask: (arg0: boolean) => void;
  setColumns: React.Dispatch<React.SetStateAction<IColumns[]>>;
  columns: IColumns[];
  createNewTask: boolean;
  ColumnId: number | null;
  setCreateNewTask: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  id: number;
  title: string;
  text: string;
}

const TaskForm = (props: IProps) => {
  const {
    columns,
    setColumns,
    setChangeTask,
    tasksIdArr,
    createNewTask,
    ColumnId,
    setCreateNewTask,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const onSubmit = (data: FormValues) => {
    if (createNewTask) {
      columns[ColumnId!].items = [
        ...columns[ColumnId!].items,
        {
          id: getRandomID(),
          Task: data.title,
          message: data.text,
        },
      ];
      setCreateNewTask(false);
    } else {
      columns[tasksIdArr[0]].items[tasksIdArr[1]].Task = data.title;
      columns[tasksIdArr[0]].items[tasksIdArr[1]].message = data.text;
    }
    setColumns(columns);
    setChangeTask(false);
  };
  return (
    <BoardFormWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setChangeTask(false)} />
        <LabelWrapper>
          Title
          <InputWrapper
            type="text"
            {...register('title', {
              required: 'enter title',
              maxLength: {
                value: 30,
                message: 'title cannot be more than 30 words',
              },
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
              maxLength: {
                value: 182,
                message: 'description cannot be more than 182 words',
              },
            })}
          />
          <div>{errors?.text && errors.text.message}</div>
        </LabelWrapper>
        <ButtonWrapper type="submit">Submit</ButtonWrapper>
      </FormWrapper>
    </BoardFormWrapper>
  );
};
export default TaskForm;
