import React, { useEffect, useState } from 'react';
import {
  Column,
  Container,
  IconsWrapper,
  NewColumn,
  NewColumnWrapper,
  TaskColumnStyles,
  TaskList,
  Title,
} from './Board.style';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Icons } from '../Boards.style';
import editColumn from '../../../assets/img/edit.png';
import deleteColumn from '../../../assets/img/delete.png';
import ModalDelete from 'components/modalDelete/ModalDelete';
import ColumnForm from 'components/columnForm/ColumnForm';
import TaskCard from './taskCard/TaskCard ';

export interface IData {
  id: string;
  Task: string;
  message: string;
}

export const data = [
  {
    id: '0',
    Task: '1 задача',
    message: 'Зделать что то много чего',
  },
  {
    id: '1',
    Task: '2 задача',
    message: 'ещё задачи',
  },
  {
    id: '2',
    Task: '3 задача',
    message: 'больше задач больше',
  },
  {
    id: '3',
    Task: '4 задача',
    message: 'Огромные дела огромных дел',
  },
  {
    id: '4',
    Task: '5 задача',
    message: 'дела деловых дел',
  },
];

export interface IColumns {
  title: string;
  items: IData[] | [];
}

export const columnsData = [
  {
    title: 'To-do',
    items: data,
  },
  {
    title: 'In Progress',
    items: [],
  },
  {
    title: 'Done',
    items: [],
  },
];

const onDragEnd = (
  result: DropResult,
  columns: IColumns[],
  setColumns: React.Dispatch<React.SetStateAction<IColumns[]>>
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  console.log(source, 'sours');
  console.log(destination, 'destination');
  if (source.index !== destination.index) {
    const temp1 = columns[source.index];
    columns[source.index] = columns[destination.index];
    columns[destination.index] = temp1;
    console.log(columns);
    return setColumns(columns);
  }
};

const Board = () => {
  const [columns, setColumns] = useState<IColumns[]>(columnsData);
  const [changeColumn, setchangeColumn] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [DeleteColumn, setDeleteColumn] = useState(false);
  const [ColumnId, setColumnId] = useState<null | number>(null);

  useEffect(() => {
    console.log(columns);
    const deleteColumn = (id: number) => {
      if (DeleteColumn) {
        const newBoards = columns.filter((n, index) => {
          return index !== id;
        });
        setColumns(newBoards);
      }
    };
    if (DeleteColumn) {
      deleteColumn(ColumnId!);
      setColumnId(null);
      setDeleteColumn(false);
    }
  }, [DeleteColumn, columns, ColumnId]);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
      <Container>
        <TaskColumnStyles>
          <Droppable direction="horizontal" droppableId={'droppable'}>
            {(provided) => (
              <>
                <Column ref={provided.innerRef} {...provided.droppableProps}>
                  {columns.map((column, columnId) => {
                    return (
                      <Draggable
                        key={columnId}
                        draggableId={columnId.toString()}
                        index={Number(columnId)}
                      >
                        {(provided) => (
                          <TaskList
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Title>{column.title}</Title>
                            <IconsWrapper>
                              <Icons
                                img={editColumn}
                                onClick={() => {
                                  setchangeColumn(true);
                                  setColumnId(columnId);
                                }}
                              />
                              <Icons
                                img={deleteColumn}
                                onClick={() => {
                                  setisDelete(true);
                                  setColumnId(columnId);
                                }}
                              />
                            </IconsWrapper>
                          </TaskList>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                  <NewColumnWrapper
                    onClick={() => {
                      setchangeColumn(true);
                      setColumnId(columns.length + 1);
                    }}
                  >
                    <NewColumn />
                  </NewColumnWrapper>
                </Column>
              </>
            )}
          </Droppable>
          {changeColumn && (
            <ColumnForm
              setchangeColumn={setchangeColumn}
              columnId={ColumnId}
              columns={columns}
              setColumns={setColumns}
            />
          )}
        </TaskColumnStyles>
      </Container>
      {isDelete && <ModalDelete setisDelete={setisDelete} setDeleteBoard={setDeleteColumn} />}
    </DragDropContext>
  );
};

export default Board;
