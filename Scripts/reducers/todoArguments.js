import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  items: [],
  error: '',
};

const todoArguments = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FETCH_ARGUMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.RECEIVE_FETCH_ARGUMENTS:
      return {
        ...state,
        isFetching: false,
        items: action.todoArguments,
      };
    case actionTypes.ERROR_FETCH_ARGUMENTS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.ADD_ARGUMENT:
      return {
        ...state,
        items: [
          ...state.items,
          action.todoArgument,
        ],
      };
    default:
      return state;
  }
};

export default todoArguments;
