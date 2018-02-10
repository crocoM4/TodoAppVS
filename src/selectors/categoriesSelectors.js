import { createSelector } from 'reselect';

export const getCategories = state => state.categories;
export const getCategoriesList = state => state.categories.items;
export const getSelectedCategories = createSelector(
  getCategoriesList,
  items => items.filter(item => item.selected),
);
