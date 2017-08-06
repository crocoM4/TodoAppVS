import { combineReducers } from 'redux';
import filtriCategorie from './filtri';
import filtroCategoriaAll from './filtroAll';
import todoArgomenti from './todoArgomenti';
import dialogAdd from './dialogAdd';
import processoAdd from './processoAdd';

const reducersTodoApp = combineReducers({
    filtriCategorie,
    filtroCategoriaAll,
    todoArgomenti,
    dialogAdd,
    processoAdd
});

export default reducersTodoApp