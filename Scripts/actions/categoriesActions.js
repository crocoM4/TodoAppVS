import { callApi } from '../utils/ApiUtils';
import {
  REQUEST_FETCH_ALL_CATEGORIES,
  RECEIVE_FETCH_ALL_CATEGORIES,
  ERROR_FETCH_ALL_CATEGORIES,
  ADD_CATEGORY,
  TOOGLE_SELECT_CATEGORY,
  TOOGLE_SELECT_CATEGORY_ALL,
} from '../constants/actionTypes';
import { fetchTodoArgumentsByCategory } from './todoArgumentsActions';
import { goNextStep } from './dialogAddActions';
import * as config from '../constants/config';

const requestFetchAllCategories = () => (
  {
    type: REQUEST_FETCH_ALL_CATEGORIES,
  }
);

const receiveFetchAllCategories = categories => (
  {
    type: RECEIVE_FETCH_ALL_CATEGORIES,
    categories,
  }
);

const errorFetchAllCategories = error => (
  {
    type: ERROR_FETCH_ALL_CATEGORIES,
    error,
  }
);

const addCategory = category => (
  {
    type: ADD_CATEGORY,
    category,
  }
);

export const toogleSelectCategory = selectedCategory => (
  {
    type: TOOGLE_SELECT_CATEGORY,
    selectedCategory,
  }
);

export const toogleSelectCategoryAll = () => (
  {
    type: TOOGLE_SELECT_CATEGORY_ALL,
  }
);


export const fetchAllCategories = () => (dispatch) => {
  dispatch(requestFetchAllCategories());
  const request = callApi('fetch-all-categories');
  request.then(
    (json) => {
      const objectResponse = JSON.parse(json);
      if (objectResponse.success) {
        dispatch(receiveFetchAllCategories(objectResponse.categories));
        dispatch(fetchTodoArgumentsByCategory(config.categoryAll));
      } else {
        dispatch(errorFetchAllCategories(objectResponse.messageError));
      }
    },
    error => ({ error }),
  );
};

export const deleteCategory = (category = {}) => (dispatch) => {
  const request = callApi('delete-category', { category });
  request.then(
    (json) => {
      const objectResponse = JSON.parse(json);
      if (objectResponse.success) {
        dispatch(fetchAllCategories());
      } else {
        // console.log(objectResponse.messageError);
      }
    },
    error => ({ error }),
  );
};

export const executeAddCategory = (name = '', nextStep = '') => (dispatch) => {
  const request = callApi('add-category', { name });
  request.then(
    (json) => {
      const objectResponse = JSON.parse(json);
      if (objectResponse.success) {
        dispatch(addCategory(objectResponse.category));
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
