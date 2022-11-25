import { Icons } from 'pages/boards/Boards.style';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IconsWrapperTask, Message, TaskInformation, Title } from './Task.style';
import editTask from '../../../../assets/img/edit.png';
import deleteTaskImg from '../../../../assets/img/delete.png';
import { IColumns } from '../Board';

interface IProps {
  setChangeTask: React.Dispatch<React.SetStateAction<boolean>>;
  setTasksIdArr: React.Dispatch<React.SetStateAction<number[]>>;
  setDeleteTasks: React.Dispatch<React.SetStateAction<boolean>>;
  setisDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTask: (arr: IColumns[]) => void;
  columnId: number;
  columns: IColumns[];
  item: {
    id: string;
    Task: string;
    message: string;
  };
  index: number;
}

const Task = (props: IProps) => {
  const { index, item, setisDelete, setDeleteTasks, setTasksIdArr, columnId, setChangeTask } =
    props;
  const { Task, id, message } = item;

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={id}
        >
          <TaskInformation style={{ height: '100%' }}>
            <Title>{Task}</Title>
            <IconsWrapperTask>
              <Icons
                img={editTask}
                onClick={() => {
                  setChangeTask(true);
                  setTasksIdArr([columnId, index]);
                }}
              />
              <Icons
                img={deleteTaskImg}
                onClick={() => {
                  setisDelete(true);
                  setDeleteTasks(true);
                  setTasksIdArr([columnId, index]);
                }}
              />
            </IconsWrapperTask>
            <Message>{message}</Message>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
