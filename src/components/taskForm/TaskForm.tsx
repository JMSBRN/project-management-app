import React from 'react';
import { getRandomID, IColumns } from 'pages/boards/Boards';
import { useForm } from 'react-hook-form';
import { BoardForm, Button, Close, Form, Input, Label } from './TaskForm.style';

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
    <BoardForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setChangeTask(false)} />
        <Label>
          Title
          <Input
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
        </Label>
        <Label>
          Description
          <Input
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
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </BoardForm>
  );
};
export default TaskForm;
