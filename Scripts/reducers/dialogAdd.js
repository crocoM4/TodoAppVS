import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isOpen: false,
  steps: [],
};

const dialogAdd = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOOGLE_OPEN_DIALOG_ADD:
      return {
        ...state,
        isOpen: action.open,
      };
    case actionTypes.ON_NEXT_STEP_DIALOG_ADD:
      return {
        ...state,
        steps: [
          ...state, {
            stepId: action.stepId,
            options: {
              selectedCategory: action.selectedCategory,
            },
          },
        ],
      };

    case actionTypes.ON_PREVIOUS_STEP_DIALOG_ADD:
      return {
        ...state,
        steps: [
          ...state.steps.slice(0, state.length - 1),
        ],
      };
      // Remove item by index
      // return [
      //    ...state.slice(0, index),
      //    ...state.slice(index+1)
      // ];
    case actionTypes.RESET_STEPS_DIALOG_ADD:
      return {
        ...state,
        isOpen: false,
        steps: [],
      };
    default:
      return state;
  }
};

export default dialogAdd;
