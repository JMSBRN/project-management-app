import { FormValuesBoard } from 'components/boardForm/BoardForm';
import { IBoard } from 'pages/boards/Boards';

export interface boardsSliceInitState {
  boards: IBoard[];
}

export interface IChangeBoard {
  data: FormValuesBoard;
  boardId: number;
}
