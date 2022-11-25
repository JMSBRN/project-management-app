import React, { useEffect, useState } from 'react';
import {
  Column,
  Container,
  IconsWrapper,
  NewColumn,
  NewColumnWrapper,
  NewTask,
  NewTaskWrapper,
  TaskColumnStyles,
  TaskList,
  Tasks,
  Title,
} from './Board.style';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Icons } from '../Boards.style';
import editColumn from '../../../assets/img/edit.png';
import deleteColumnImg from '../../../assets/img/delete.png';
import ModalDelete from 'components/modalDelete/ModalDelete';
import ColumnForm from 'components/columnForm/ColumnForm';
import Task from './task/Task ';
import TaskForm from 'components/taskForm/TaskForm';

export interface IData {
  id: string;
  Task: string;
  message: string;
}

export const data = [
  {
    id: getRandomID(),
    Task: '1 задача',
    message: 'Зделать что то много чего',
  },
  {
    id: getRandomID(),
    Task: '2 задача',
    message: 'ещё задачи',
  },
  {
    id: getRandomID(),
    Task: '3 задача',
    message: 'больше задач больше',
  },
  {
    id: getRandomID(),
    Task: '4 задача',
    message: 'Огромные дела огромных дел',
  },
  {
    id: getRandomID(),
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

export function getRandomID() {
  return (Math.random() + 1).toString(36).substring(7);
}

const onDragEnd = (result: DropResult, columns: IColumns[]) => {
  if (!result.destination) return;
  const { source, destination, type } = result;

  if (type === 'columns') {
    if (source.index !== destination.index) {
      const [removed] = columns.splice(source.index, 1);
      columns.splice(destination.index, 0, removed);
    }
  } else if (type === 'task') {
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[Number(source.droppableId)];
      const destColumn = columns[Number(source.droppableId)];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      columns[Number(source.droppableId)].items = sourceItems;
      columns[Number(destination.droppableId)].items.splice(destination.index, 0, removed);
    } else {
      const column = columns[Number(source.droppableId)];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      columns[Number(source.droppableId)].items = copiedItems;
    }
  }
};

const Board = () => {
  const [columns, setColumns] = useState<IColumns[]>(columnsData);
  const [changeColumn, setchangeColumn] = useState(false);
  const [changeTask, setChangeTask] = useState(false);
  const [createNewTask, setCreateNewTask] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState('');
  const [deleteTasks, setDeleteTasks] = useState(false);
  const [tasksIdArr, setTasksIdArr] = useState([0, 0]);
  const [ColumnId, setColumnId] = useState<null | number>(null);

  const deleteTask = (arr: IColumns[]) => {
    setColumns(arr);
  };

  useEffect(() => {
    const deleteColumn = (id: number) => {
      const newColumns = columns.filter((n, index) => {
        return index !== id;
      });
      setColumns(newColumns);
    };
    if (deleteItem === 'column') {
      deleteColumn(ColumnId!);
      setColumnId(null);
      setDeleteItem('');
    }
    if (deleteItem === 'task') {
      columns[tasksIdArr[0]].items.splice(tasksIdArr[1], 1);
      deleteTask(columns);
      setDeleteItem('');
      setDeleteTasks(false);
    }
  }, [tasksIdArr, deleteItem, columns, ColumnId]);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
      <Container data-testid="board">
        <TaskColumnStyles>
          <Droppable droppableId={'all-columns'} direction="horizontal" type="columns">
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
                            id={columnId.toString()}
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
                                img={deleteColumnImg}
                                onClick={() => {
                                  setisDelete(true);
                                  setColumnId(columnId);
                                }}
                              />
                            </IconsWrapper>
                            <Droppable
                              key={columnId}
                              droppableId={columnId.toString()}
                              type="task"
                              ignoreContainerClipping
                            >
                              {(provided) => (
                                <Tasks ref={provided.innerRef} {...provided.droppableProps}>
                                  {column.items.map((item, index) => (
                                    <Task
                                      setChangeTask={setChangeTask}
                                      setTasksIdArr={setTasksIdArr}
                                      setDeleteTasks={setDeleteTasks}
                                      setisDelete={setisDelete}
                                      deleteTask={deleteTask}
                                      columnId={columnId}
                                      columns={columns}
                                      key={index}
                                      item={item}
                                      index={index}
                                    />
                                  ))}
                                  <NewTaskWrapper
                                    onClick={() => {
                                      setChangeTask(true);
                                      setTasksIdArr([
                                        tasksIdArr[0],
                                        columns[columnId].items.length + 1,
                                      ]);
                                      setColumnId(columnId);
                                      setCreateNewTask(true);
                                    }}
                                  >
                                    <NewTask />
                                    <div>New task</div>
                                  </NewTaskWrapper>
                                  {provided.placeholder}
                                </Tasks>
                              )}
                            </Droppable>
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
            <ColumnForm setchangeColumn={setchangeColumn} columnId={ColumnId} columns={columns} />
          )}
          {changeTask && (
            <TaskForm
              setCreateNewTask={setCreateNewTask}
              ColumnId={ColumnId}
              createNewTask={createNewTask}
              setColumns={setColumns}
              setChangeTask={setChangeTask}
              tasksIdArr={tasksIdArr}
              columns={columns}
            />
          )}
        </TaskColumnStyles>
      </Container>
      {isDelete && (
        <ModalDelete
          deleteTasks={deleteTasks}
          setDeleteItem={setDeleteItem}
          setisDelete={setisDelete}
        />
      )}
    </DragDropContext>
  );
};

export default Board;
