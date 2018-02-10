import { createSelector } from 'reselect';
import { getSelectedCategories } from './categoriesSelectors';

export const getTodoArguments = state => state.todoArguments;
export const getTodoArgumentsList = state => state.todoArguments.items;

export const getFilteredTodoArguments = createSelector(
  getSelectedCategories,
  getTodoArgumentsList,
  (listSelectedCategories, listTodoArguments) => (
    listTodoArguments.filter(todo =>
      listSelectedCategories.findIndex(cat => cat.id === todo.category.id
        || cat.id === '0') !== -1)
  ),
);
