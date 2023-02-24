import React from 'react';
import { getRandomID, IColumns } from 'pages/boards/Boards';
import { BoardForm, Button, Close, Form, Input, Label } from './TaskForm.style';
import { useAppDispatch } from 'app/hooks';
import { useForm } from 'react-hook-form';
import { addColumns } from 'features/boards/BoardsSlice';
import clone from 'clone';
import { useTranslation } from 'react-i18next';

interface IProps {
  tasksIdArr: number[];
  setChangeTask: (arg0: boolean) => void;
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
  const dispatch = useAppDispatch();
  const { columns, setChangeTask, tasksIdArr, createNewTask, ColumnId, setCreateNewTask } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const onSubmit = (data: FormValues) => {
    if (createNewTask) {
      const newColumns = clone(columns);
      newColumns[ColumnId!].items = [
        ...newColumns[ColumnId!].items,
        {
          id: getRandomID(),
          Task: data.title,
          message: data.text,
        },
      ];
      dispatch(addColumns({ newColumns }));
      setCreateNewTask(false);
    } else {
      const newColumns = clone(columns);
      newColumns[tasksIdArr[0]].items[tasksIdArr[1]].Task = data.title;
      newColumns[tasksIdArr[0]].items[tasksIdArr[1]].message = data.text;
      dispatch(addColumns({ newColumns }));
    }
    setChangeTask(false);
  };
  const { t } = useTranslation();

  return (
    <BoardForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Close onClick={() => setChangeTask(false)} />
        <Label>
          {t('main.taskForm.title')}
          <Input
            type="text"
            {...register('title', {
              required: `${t('main.taskForm.title-input-required')}}`,
              maxLength: {
                value: 30,
                message: `${t('main.taskForm.title-input-msg-length')}}`,
              },
            })}
          />
          <div>{errors?.title && errors.title.message}</div>
        </Label>
        <Label>
          {t('main.taskForm.description')}
          <Input
            type="text"
            {...register('text', {
              required: `${t('main.taskForm.description-input-required')}}`,
              maxLength: {
                value: 182,
                message: `${t('main.taskForm.description-input-msg-length')}}`,
              },
            })}
          />
          <div>{errors?.text && errors.text.message}</div>
        </Label>
        <Button type="submit">{t('main.taskForm.submit-btn')}</Button>
      </Form>
    </BoardForm>
  );
};
export default TaskForm;
