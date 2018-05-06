// import { createSelector } from 'reselect';
// import { getSelectedCategoriesFilter, getVisibilityFilter } from './todoFiltersSelectors';
// import categoryAll, { ONLY_COMPLETED, ONLY_TO_COMPLETE } from '../constants/config';

export const getTodoArguments = state => state.todoArguments;
export const getTodoArgumentsList = state => state.todoArguments.items;

// export const getFilteredTodoArguments = createSelector(
//   getSelectedCategoriesFilter,
//   getTodoArgumentsList,
//   getVisibilityFilter,
//   (listSelectedCategories, listTodoArguments, visibility) => (
//     listTodoArguments.filter((todo) => {
//       if (visibility === ONLY_COMPLETED && !todo.completed) {
//         return false;
//       }
//       if (visibility === ONLY_TO_COMPLETE && todo.completed) {
//         return false;
//       }
//       return listSelectedCategories.findIndex(category => category.id === todo.category.id
//           || category.id === categoryAll.id) !== -1;
//     })
//   ),
// );
