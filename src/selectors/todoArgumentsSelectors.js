import { createSelector } from 'reselect';
import { getSelectedFilterCategories } from './todoFiltersSelectors';
import categoryAll from '../constants/config';

export const getTodoArguments = state => state.todoArguments;
export const getTodoArgumentsList = state => state.todoArguments.items;

export const getFilteredTodoArguments = createSelector(
  getSelectedFilterCategories,
  getTodoArgumentsList,
  (listSelectedCategories, listTodoArguments) => (
    listTodoArguments.filter(todo =>
      listSelectedCategories.findIndex(category => category.id === todo.category.id
        || category.id === categoryAll.id) !== -1)
  ),
);
