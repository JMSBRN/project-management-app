import React, { useState } from 'react';
import { Container, TaskColumnStyles, TaskList, Title } from './Board.style';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import TaskCard from './taskCard/TaskCard ';

export const data = [
  {
    id: '1',
    Task: 'Create PR for the Task',
    message: 'Зделать что то много чего',
  },
  {
    id: '2',
    Task: 'Fix Styling',
    message: 'ещё задачи',
  },
  {
    id: '3',
    Task: 'Handle Api Changes',
    message: 'больше задач больше',
  },
  {
    id: '4',
    Task: 'Blog on new features',
    message: 'Огромные дела огромных дел',
  },
  {
    id: '5',
    Task: 'Call with Backend Team',
    message: '05-Jan-2021',
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: 'To-do',
    items: data,
  },
  [uuidv4()]: {
    title: 'In Progress',
    items: [],
  },
  [uuidv4()]: {
    title: 'Done',
    items: [],
  },
};

const onDragEnd = (
  result: DropResult,
  columns: IColumns,
  setColumns: React.Dispatch<React.SetStateAction<IColumns>>
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

interface IColumns {
  [x: string]: {
    title: string;
    items: {
      id: string;
      Task: string;
      message: string;
    }[];
  };
}

const Board = () => {
  const [columns, setColumns] = useState<IColumns>(columnsFromBackend);
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
      <Container data-testid="board">
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => (
                  <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                    <Title>{column.title}</Title>
                    {column.items.map((item, index) => (
                      <TaskCard key={index} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default Board;
