import { createSelector } from 'reselect';
import { isFetchingCategoriesFilter } from './todoFiltersSelectors';
import { isFetchingTodoArguments } from './todoArgumentsSelectors';

export const showLoading = createSelector(
  isFetchingCategoriesFilter,
  isFetchingTodoArguments,
  (isFetchingCategories, isFetchingTodos) => isFetchingCategories || isFetchingTodos,
);

export default showLoading;
