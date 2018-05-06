import { createSelector } from 'reselect';
import { ONLY_COMPLETED } from '../constants/config';

export const getTodoFilters = state => state.todoFilters;
export const getCategoriesFilterList = state => state.todoFilters.categories;
export const getVisibilityFilter = state => state.todoFilters.visibility;

export const visibilityOnlyCompleted = createSelector(
  getVisibilityFilter,
  visibility => visibility === ONLY_COMPLETED,
);

export const getSelectedCategoriesFilter = createSelector(
  getCategoriesFilterList,
  categories => categories.filter(category => category.selected),
);

export const getSelectedCategoriesId = createSelector(
  getCategoriesFilterList,
  categories => categories.filter(category => category.selected)
    .map(categoryFilter => categoryFilter.id),
);
