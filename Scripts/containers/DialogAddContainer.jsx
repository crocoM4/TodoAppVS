import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';
import { SELECT_WANT_TO_ADD, ADD_CATEGORY, ADD_ARGUMENT, SELECT_CATEGORY, DONE } from '../constants/steps';

import DialogAdd from '../components/dialogAdd/DialogAdd';
import SelectActionAdd from '../components/dialogAdd/SelectActionAdd';
import AggiungiCategoria from '../components/dialogAdd/AggiungiCategoria';
import ScegliCategoria from '../components/dialogAdd/ScegliCategoria';
import AggiungiArgomento from '../components/dialogAdd/AggiungiArgomento';
import DoneAdd from '../components/dialogAdd/DoneAdd';

const getContentToRender = (steps) => {
  if (steps.length === 0) {
    return <SelectActionAdd />;
  }
  const lastStep = steps[steps.length - 1];
  switch (lastStep.stepId) {
    case SELECT_WANT_TO_ADD:
      return <SelectActionAdd />;
    case ADD_CATEGORY:
      return <AggiungiCategoria />;
    case ADD_ARGUMENT:
      return <AggiungiArgomento />;
    case SELECT_CATEGORY:
      return <ScegliCategoria />;
    case DONE:
      return <DoneAdd />;
    default:
      return <SelectActionAdd />;
  }
};

const mapStateToProps = state => (
  {
    isOpen: state.dialogAdd.isOpen,
    contentToRender: getContentToRender(state.dialogAdd.steps),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onClose: () => {
      dispatch(action.toogleDialog(false));
    },
    onBack: (stepCount) => {
      dispatch(action.goPreviousStep(stepCount));
    },
  }
);

const DialogAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogAdd);

export default DialogAddContainer;
