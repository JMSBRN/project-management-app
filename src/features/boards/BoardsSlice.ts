import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { FormValuesBoard } from 'components/boardForm/BoardForm';
import { IBoard } from 'pages/boards/Boards';
import { boardsSliceInitState, IChangeBoard, IChangeColumn, INewColumn } from './boardsInterfaces';

const initialState: boardsSliceInitState = {
  boardId: JSON.parse(localStorage.getItem('boardId')!) || 0,
  boards: JSON.parse(localStorage.getItem('boards')!) || [
    {
      title: '1 task',
      text: 'description 1',
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    newBoardId: (state, action: PayloadAction<number | null>) => {
      state.boardId = action.payload;
      localStorage.setItem('boardId', JSON.stringify(state.boardId));
    },
    addBoard: (state, action: PayloadAction<FormValuesBoard>) => {
      state.boards = [...state.boards, action.payload];
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    changeBoard: (state, action: PayloadAction<IChangeBoard>) => {
      state.boards[action.payload.boardId] = action.payload.data;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    deleteBoard: (state, action: PayloadAction<IBoard[]>) => {
      state.boards = action.payload;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    addColumns: (state, action: PayloadAction<INewColumn>) => {
      state.boards[state.boardId!].columns = action.payload.newColumns;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    deleteColumns: (state, action: PayloadAction<IChangeColumn>) => {
      state.boards[state.boardId!].columns = action.payload.delColumn;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    addTask: (state, action: PayloadAction<INewColumn>) => {
      state.boards[state.boardId!].columns = action.payload.newColumns;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
  },
});

export const { deleteBoard, addBoard, changeBoard, newBoardId, deleteColumns, addColumns } =
  boardsSlice.actions;
export const boardsSelect = (state: RootState) => state.boards;
export default boardsSlice.reducer;
