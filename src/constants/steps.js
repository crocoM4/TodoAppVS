export const SELECT_WANT_TO_ADD = 'SELECT_WANT_TO_ADD';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_ARGUMENT = 'ADD_ARGUMENT';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_COMPLETE_DATE = 'SELECT_COMPLETE_DATE';
export const DONE = 'DONE';

export const stepList = [
  {
    id: SELECT_WANT_TO_ADD,
    description: 'What want to add',
  },
  {
    id: ADD_CATEGORY,
    description: 'Add a category',
  },
  {
    id: SELECT_CATEGORY,
    description: 'Select a category',
  },
  {
    id: ADD_ARGUMENT,
    description: 'Add Argument',
  },
  {
    id: SELECT_COMPLETE_DATE,
    description: 'Schedule',
  },
  {
    id: DONE,
    description: 'That\'s it',
  },
];
