import * as actionTypes from '../constants/actionTypes';
import categoryAll from '../constants/config';

const initialState = {
  isFetching: false,
  items: [
    {
      category: categoryAll,
      selected: true,
    },
  ],
  error: '',
};

const categories = (state = initialState, action) => {
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
        items: [
          ...state.items,
          ...action.categories.map(category => (
            {
              category,
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
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        items: [
          ...state.items,
          {
            category: action.category,
            selected: false,
          },
        ],
      };
    case actionTypes.TOOGLE_SELECT_CATEGORY:
      return {
        ...state,
        isFetching: false,
        items: state.items.map((category) => {
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
        // items: state.items.set(state.items.findIndex(category =>
        //   category.id === action.selectedCategory.id),
        //   category => category.selected = !category.selected),
      };
    case actionTypes.TOOGLE_SELECT_CATEGORY_ALL:
      return {
        ...state,
        isFetching: false,
        items: state.items.map((category) => {
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
    default:
      return state;
  }
};

export default categories;
