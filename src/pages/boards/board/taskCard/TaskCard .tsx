import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskInformation } from './TaskCard.style';

interface IProps {
  item: {
    id: string;
    Task: string;
    message: string;
  };
  index: number;
}

const TaskCard = (props: IProps) => {
  const { index, item } = props;
  const { Task, id, message } = item;
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <TaskInformation>
            <p>{Task}</p>
            <div className="secondary-details">{message}</div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
