import {
  SHOW_MESSAGE_INFO,
  SHOW_MESSAGE_ERROR,
  HIDE_MESSAGE,
} from '../constants/actionTypes';

export const showMessageInfo = message => (
  {
    type: SHOW_MESSAGE_INFO,
    message,
  }
);

export const showMessageError = message => (
  {
    type: SHOW_MESSAGE_ERROR,
    message,
  }
);

export const hideMessage = () => (
  {
    type: HIDE_MESSAGE,
  }
);
