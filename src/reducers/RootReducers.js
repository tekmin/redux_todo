import { combineReducers } from 'redux';
import TodoReducers from './TodoReducers';

const RootReducers = combineReducers({
  todos: TodoReducers,
});

export default RootReducers;