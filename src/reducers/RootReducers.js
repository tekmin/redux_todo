import { combineReducers } from 'redux';
import TodoReducers from './TodoReducers';

export const RootReducers = combineReducers({
  todos: TodoReducers,
});