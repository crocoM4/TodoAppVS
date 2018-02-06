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
          ...state.steps, {
            stepId: action.stepId,
            options: action.options,
          },
        ],
      };

    case actionTypes.ON_PREVIOUS_STEP_DIALOG_ADD:
      return {
        ...state,
        steps: [
          ...state.steps.slice(0, state.steps.length - 1),
        ],
      };
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
