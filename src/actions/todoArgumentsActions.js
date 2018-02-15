import { callApi } from '../utils/ApiUtils';
import {
  REQUEST_FETCH_ARGUMENTS,
  RECEIVE_FETCH_ARGUMENTS,
  ERROR_FETCH_ARGUMENTS,
  ADD_ARGUMENT_LOCAL,
  REMOVE_ARGUMENT_LOCAL,
} from '../constants/actionTypes';

const requestFetchArguments = () => (
  {
    type: REQUEST_FETCH_ARGUMENTS,
  }
);

const receiveFetchArguments = todoArguments => (
  {
    type: RECEIVE_FETCH_ARGUMENTS,
    todoArguments,
  }
);

const errorFetchArguments = error => (
  {
    type: ERROR_FETCH_ARGUMENTS,
    error,
  }
);

const addArgumentLocal = todoArgument => (
  {
    type: ADD_ARGUMENT_LOCAL,
    todoArgument,
  }
);

const removeArgumentLocal = todoArgumentIndex => (
  {
    type: REMOVE_ARGUMENT_LOCAL,
    todoArgumentIndex,
  }
);

export const fetchTodoArgumentsByCategory = (categoryId = '') => (dispatch) => {
  dispatch(requestFetchArguments());
  const request = callApi('/fetch-arguments-by-category', { categoryId });
  return request.then(
    (response) => {
      if (response.success) {
        dispatch(receiveFetchArguments(response.arguments));
      } else {
        dispatch(errorFetchArguments(response.messageError));
      }
    },
    error => ({ error }),
  );
};

export const deleteTodoArgument = (todoArgumentId = '') => (dispatch, getState) => {
  const request = callApi('/delete-argument', { todoArgumentId });
  return request.then(
    (response) => {
      if (response.success) {
        const { items } = getState().todoArguments;
        const todoArgumentIndex = items.findIndex(category => category.id === todoArgumentId);
        dispatch(removeArgumentLocal(todoArgumentIndex));
      } else {
        // console.log(objectResponse.messageError);
      }
    },
    error => ({ error }),
  );
};

export const executeAddTodoArgument = (title = '', categoryId = '', callback = () => {}) => (dispatch) => {
  const request = callApi('/add-argument', { title, categoryId });
  return request.then(
    (response) => {
      if (response.success) {
        dispatch(addArgumentLocal(response.argument));
        if (callback !== undefined) {
          callback();
        }
      } else {
        console.log(response.messageError);
      }
    },
    error => ({ error }),
  );
};
