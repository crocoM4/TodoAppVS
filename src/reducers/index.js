import { combineReducers } from 'redux';
import categories from './categories';
import todoArguments from './todoArguments';

const reducersTodoApp = combineReducers({
  categories,
  todoArguments,
});

export default reducersTodoApp;
