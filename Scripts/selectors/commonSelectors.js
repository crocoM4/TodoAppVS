import { createSelector } from 'reselect';

// categories selectors
export const getCategories = state => state.categories;
export const getCategoriesList = state => state.categories.items;
export const getSelectedCategories = createSelector(
  getCategoriesList,
  items => items.filter(item => item.selected),
);

// todo arguments selectors
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
