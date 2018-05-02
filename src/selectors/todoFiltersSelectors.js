import { createSelector } from 'reselect';

export const getTodoFilters = state => state.todoFilters;
export const getFilterCategoriesList = state => state.todoFilters.categories;
export const getSelectedFilterCategories = createSelector(
  getFilterCategoriesList,
  categories => categories.filter(category => category.selected),
);
