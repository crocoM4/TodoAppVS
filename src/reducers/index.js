import { combineReducers } from 'redux';
import todoFilters from './todoFilters';
import todoArguments from './todoArguments';
import message from './message';

const reducersTodoApp = combineReducers({
  todoFilters,
  todoArguments,
  message,
});

export default reducersTodoApp;
