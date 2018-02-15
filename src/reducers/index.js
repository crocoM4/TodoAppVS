import { combineReducers } from 'redux';
import categories from './categories';
import todoArguments from './todoArguments';
// import dialogAdd from './dialogAdd';

const reducersTodoApp = combineReducers({
  categories,
  todoArguments,
  // dialogAdd,
});

export default reducersTodoApp;
