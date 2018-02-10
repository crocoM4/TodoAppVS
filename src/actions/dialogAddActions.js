import {
  TOOGLE_OPEN_DIALOG_ADD,
  ON_NEXT_STEP_DIALOG_ADD,
  ON_PREVIOUS_STEP_DIALOG_ADD,
  RESET_STEPS_DIALOG_ADD,
} from '../constants/actionTypes';

const onNextStep = (stepId, options) => (
  {
    type: ON_NEXT_STEP_DIALOG_ADD,
    stepId,
    options,
  }
);

const onPreviousStep = () => (
  {
    type: ON_PREVIOUS_STEP_DIALOG_ADD,
  }
);

const resetStepsDialog = () => (
  {
    type: RESET_STEPS_DIALOG_ADD,
  }
);

export const toogleOpen = open => (
  {
    type: TOOGLE_OPEN_DIALOG_ADD,
    open,
  }
);

export const goNextStep = (nextStep = '', options = {}) => (dispatch) => {
  dispatch(onNextStep(nextStep, options));
};

export const goPreviousStep = () => (dispatch, getState) => {
  const stepCount = getState().dialogAdd.steps.length;
  if (stepCount === 0) {
    dispatch(resetStepsDialog());
  } else {
    dispatch(onPreviousStep());
  }
};

export const resetSteps = () => (dispatch) => {
  dispatch(resetStepsDialog());
};
