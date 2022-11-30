import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { FormValuesBoard } from 'components/boardForm/BoardForm';
import { IBoard } from 'pages/boards/Boards';
import { boardsSliceInitState, IChangeBoard } from './boardsInterfaces';

const initialState: boardsSliceInitState = {
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
    newBoards: (state, action: PayloadAction<IBoard[]>) => {
      state.boards = action.payload;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    addBoard: (state, action: PayloadAction<FormValuesBoard>) => {
      state.boards = [...state.boards, action.payload];
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
    changeBoard: (state, action: PayloadAction<IChangeBoard>) => {
      state.boards[action.payload.boardId] = action.payload.data;
      localStorage.setItem('boards', JSON.stringify(state.boards));
    },
  },
});

export const { newBoards, addBoard, changeBoard } = boardsSlice.actions;
export const boardsSelect = (state: RootState) => state.boards;
export default boardsSlice.reducer;
