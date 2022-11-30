import { combineReducers } from 'redux';
import ApiReducer from '../features/api/ApiSlice';
import BoardsReduser from '../features/boards/BoardsSlice';

const rootReducer = combineReducers({
  api: ApiReducer,
  boards: BoardsReduser,
});

export default rootReducer;
