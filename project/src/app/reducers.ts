import { combineReducers } from 'redux';
import ApiReducer from '../features/api/ApiSlice';

const rootReducer = combineReducers({
  api: ApiReducer,
});

export default rootReducer;
