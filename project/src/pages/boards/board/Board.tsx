import React, { useState } from 'react';
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
import clone from 'clone';
import { Icons } from '../Boards.style';
import editColumn from '../../../assets/img/edit.png';
import deleteColumnImg from '../../../assets/img/delete.png';
import ModalDelete from 'components/modalDelete/ModalDelete';
import ColumnForm from 'components/columnForm/ColumnForm';
import Task from './task/Task ';
import TaskForm from 'components/taskForm/TaskForm';
import { IColumns } from '../Boards';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addColumns, boardsSelect, deleteColumns } from 'features/boards/BoardsSlice';
window['__react-beautiful-dnd-disable-dev-warnings'] = true;

const Board = () => {
  const dispatch = useAppDispatch();
  const { boards, boardId } = useAppSelector(boardsSelect);
  const columns = boards[boardId!].columns;
  const [changeColumn, setchangeColumn] = useState(false);
  const [changeTask, setChangeTask] = useState(false);
  const [createNewTask, setCreateNewTask] = useState(false);
  const [isDelete, setisDelete] = useState(false);
  const [deleteTasks, setDeleteTasks] = useState(false);
  const [tasksIdArr, setTasksIdArr] = useState([0, 0]);
  const [ColumnId, setColumnId] = useState<null | number>(null);

  const onDragEnd = (result: DropResult, columns: IColumns[]) => {
    if (!result.destination) return;
    const { source, destination, type } = result;
    if (type === 'columns') {
      if (source.index !== destination.index) {
        const newColumns = [...columns];
        const [removed] = newColumns.splice(source.index, 1);
        newColumns.splice(destination.index, 0, removed);
        dispatch(addColumns({ newColumns }));
      }
    } else if (type === 'task') {
      if (source.droppableId !== destination.droppableId) {
        const newColumns = clone(columns);
        const sourceColumn = newColumns[Number(source.droppableId)];
        const sourceItems = [...sourceColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        newColumns[Number(source.droppableId)].items = sourceItems;
        newColumns[Number(destination.droppableId)].items.splice(destination.index, 0, removed);
        dispatch(addColumns({ newColumns }));
      } else {
        const newColumns = clone(columns);
        const column = newColumns[Number(source.droppableId)];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        newColumns[Number(source.droppableId)].items = copiedItems;
        dispatch(addColumns({ newColumns }));
      }
    }
  };

  const delColumn = () => {
    const delColumn = [...columns].filter((n, index) => {
      return index != ColumnId;
    });
    dispatch(deleteColumns({ delColumn }));
    setColumnId(null);
  };

  const deleteTask = () => {
    const newColumns = clone(columns);
    newColumns[tasksIdArr[0]].items.splice(tasksIdArr[1], 1);
    setDeleteTasks(false);
    dispatch(addColumns({ newColumns }));
  };

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
              setChangeTask={setChangeTask}
              tasksIdArr={tasksIdArr}
              columns={columns}
            />
          )}
        </TaskColumnStyles>
      </Container>
      {isDelete && (
        <ModalDelete
          deleteTask={deleteTask}
          delColumn={delColumn}
          deleteTasks={deleteTasks}
          setisDelete={setisDelete}
        />
      )}
    </DragDropContext>
  );
};

export default Board;
