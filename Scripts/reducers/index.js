import { combineReducers } from 'redux';
import categories from './categories';
import todoArguments from './todoArguments';
import dialogAdd from './dialogAdd';
import selezioneCategoria from './selezioneCategoria';

const reducersTodoApp = combineReducers({
  categories,
  todoArguments,
  dialogAdd,
  selezioneCategoria,
});

export default reducersTodoApp;
