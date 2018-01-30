import { callApi } from '../utils/ApiUtils';
import {
  REQUEST_FETCH_ARGUMENTS,
  RECEIVE_FETCH_ARGUMENTS,
  ERROR_FETCH_ARGUMENTS,
  ADD_ARGUMENT,
} from '../constants/actionTypes';

import { goNextStep } from './dialogAddActions';

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

const addArgument = todoArgument => (
  {
    type: ADD_ARGUMENT,
    todoArgument,
  }
);

export const fetchTodoArgumentsByCategory = (category = {}) => (dispatch) => {
  dispatch(requestFetchArguments());
  const request = callApi('fetch-arguments-by-category', { category });
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

export const deleteTodoArgument = (todoArgument = {}) => (dispatch) => {
  const request = callApi('delete-argument', { todoArgument });
  return request.then(
    (response) => {
      if (response.success) {
        // dispatch(addArgument(objectResponse.argument));
      } else {
        // console.log(objectResponse.messageError);
      }
    },
    error => ({ error }),
  );
};

export const executeAddTodoArgument = (title = '', categoryId = '', nextStep = '') => (dispatch) => {
  const request = callApi('add-argument', { title, categoryId });
  return request.then(
    (response) => {
      if (response.success) {
        dispatch(addArgument(response.argument));
        if (nextStep !== '') {
          dispatch(goNextStep(nextStep));
        }
      } else {
        console.log(response.messageError);
      }
    },
    error => ({ error }),
  );
};
