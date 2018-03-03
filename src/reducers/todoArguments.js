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
    case actionTypes.SET_COMPLETED_ARGUMENT_LOCAL:
      return {
        ...state,
        items: [
          ...action.items.map(argument => (
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
