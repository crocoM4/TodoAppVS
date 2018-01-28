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
  request.then(
    (json) => {
      const objectResponse = JSON.parse(json);
      if (objectResponse.success) {
        dispatch(receiveFetchArguments(objectResponse.arguments));
      } else {
        dispatch(errorFetchArguments(objectResponse.messageError));
      }
    },
    error => ({ error }),
  );
};

export const deleteTodoArgument = (todoArgument = {}) => (dispatch) => {
  const request = callApi('delete-argument', { todoArgument });
  request.then(
    (json) => {
      const objectResponse = JSON.parse(json);
      if (objectResponse.success) {
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
  request.then(
    (json) => {
      const objectResponse = JSON.parse(json);
      if (objectResponse.success) {
        dispatch(addArgument(objectResponse.argument));
        if (nextStep !== '') {
          dispatch(goNextStep(nextStep));
        }
      } else {
        console.log(objectResponse.messageError);
      }
    },
    error => ({ error }),
  );
};
