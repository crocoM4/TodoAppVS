import * as actionTypes from '../constants/actionTypes';
import { queryItemsLimit } from '../constants/config';

const initialState = {
  isFetching: false,
  items: [],
  limit: queryItemsLimit,
  skip: 0,
  moreToLoad: true,
  error: '',
};

const todoArguments = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FETCH_ARGUMENTS:
      return {
        ...state,
        isFetching: true,
        limit: action.limit,
        skip: action.skip,
        items: (action.skip === 0) ? [] : state.items,
        moreToLoad: (action.skip === 0) || state.moreToLoad,
      };
    case actionTypes.RECEIVE_FETCH_ARGUMENTS:
      return {
        ...state,
        isFetching: false,
        items: (state.skip === 0)
          ? action.todoArguments
          : [...state.items, ...action.todoArguments],
        moreToLoad: (action.todoArguments.length === state.limit),
      };
    case actionTypes.ERROR_FETCH_ARGUMENTS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.ADD_ARGUMENT_LOCAL:
      return {
        ...state,
        items: [
          ...state.items,
          action.todoArgument,
        ],
      };
    case actionTypes.REMOVE_ARGUMENT_LOCAL:
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.todoArgumentIndex),
          ...state.items.slice(action.todoArgumentIndex + 1),
        ],
      };
    case actionTypes.UPDATE_ARGUMENT_LOCAL:
      return {
        ...state,
        items: [
          ...state.items.map(argument => (
            (argument.id === action.todoArgument.id)
              ? { ...action.todoArgument } : argument
          )),
        ],
      };
    default:
      return state;
  }
};

export default todoArguments;
