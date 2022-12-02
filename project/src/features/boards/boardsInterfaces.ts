import { FormValuesBoard } from 'components/boardForm/BoardForm';
import { IBoard, IColumns } from 'pages/boards/Boards';

export interface boardsSliceInitState {
  boardId: number | null;
  boards: IBoard[];
}

export interface IChangeBoard {
  data: FormValuesBoard;
  boardId: number;
}

export interface IChangeColumn {
  delColumn: IColumns[];
}

export interface INewColumn {
  newColumns: IColumns[];
}
