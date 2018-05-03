import * as actionTypes from '../constants/actionTypes';
import categoryAll, { ONLY_TO_COMPLETE } from '../constants/config';

const setVisibility = (current, next) => {
  if (current !== next) {
    return next;
  }
  return current;
};

const initialState = {
  isFetching: false,
  categories: [
    {
      ...categoryAll,
      selected: true,
    },
  ],
  visibility: ONLY_TO_COMPLETE,
  error: '',
};

const todoFilters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.RECEIVE_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories: [
          {
            ...categoryAll,
            selected: true,
          },
          ...action.categories.map(category => (
            {
              ...category,
              selected: false,
            }
          )),
        ],
      };
    case actionTypes.ERROR_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.ADD_CATEGORY_LOCAL:
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            ...action.category,
            selected: false,
          },
        ],
      };
    case actionTypes.REMOVE_CATEGORY_LOCAL:
      return {
        ...state,
        categories: [
          ...state.categories.slice(0, action.categoryIndex),
          ...state.categories.slice(action.categoryIndex + 1),
        ],
      };
    case actionTypes.TOOGLE_SELECT_CATEGORY:
      return {
        ...state,
        isFetching: false,
        categories: state.categories.map((category) => {
          if (category.id !== action.selectedCategory.id) {
            if (category.id === categoryAll.id) {
              return {
                ...category,
                selected: false,
              };
            }
            return category;
          }
          return {
            ...category,
            selected: !category.selected,
          };
        }),
      };
    case actionTypes.TOOGLE_SELECT_CATEGORY_ALL:
      return {
        ...state,
        isFetching: false,
        categories: state.categories.map((category) => {
          if (category.id === categoryAll.id) {
            return {
              ...category,
              selected: !category.selected,
            };
          }
          return {
            ...category,
            selected: false,
          };
        }),
      };
    case actionTypes.SWITCH_VISIBILITY_FILTER:
      return {
        ...state,
        visibility: setVisibility(state.visibility, action.visibility),
      };
    default:
      return state;
  }
};

export default todoFilters;
