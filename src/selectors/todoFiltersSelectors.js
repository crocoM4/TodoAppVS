import { createSelector } from 'reselect';

export const getTodoFilters = state => state.todoFilters;
export const getCategoriesFilterList = state => state.todoFilters.categories;
export const getVisibilityFilter = state => state.todoFilters.visibility;
export const getSelectedCategoriesFilter = createSelector(
  getCategoriesFilterList,
  categories => categories.filter(category => category.selected),
);
