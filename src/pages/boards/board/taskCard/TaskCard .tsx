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

const Task = (props: IProps) => {
  return (
    <Draggable key={props.item.id} draggableId={props.item.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={props.item.id}
        >
          <TaskInformation>
            <p>{props.item.Task}</p>
            <div className="secondary-details">{props.item.message}</div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
