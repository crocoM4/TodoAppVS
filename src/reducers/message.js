import * as actionTypes from '../constants/actionTypes';

const initialState = {
  show: false,
  isError: false,
  text: '',
  action: undefined,
  actionText: '',
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE_INFO:
      return {
        ...state,
        show: true,
        isError: false,
        text: action.message,
      };
    case actionTypes.SHOW_MESSAGE_ERROR:
      return {
        ...state,
        show: true,
        isError: true,
        text: action.message,
      };
    case actionTypes.HIDE_MESSAGE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default message;
