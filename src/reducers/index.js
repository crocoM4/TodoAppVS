import { combineReducers } from 'redux';
import categories from './categories';
import todoArguments from './todoArguments';
import message from './message';

const reducersTodoApp = combineReducers({
  categories,
  todoArguments,
  message,
});

export default reducersTodoApp;
