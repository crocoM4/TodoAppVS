import React from 'react';
import PropTypes from 'prop-types';

import SelectActionAdd from './SelectActionAdd';
import AddCategory from './AddCategory';
import SelectCategory from './SelectCategory';
import AddTodoArgument from './AddTodoArgument';
import Done from './Done';
import {
  SELECT_WANT_TO_ADD,
  ADD_CATEGORY,
  ADD_ARGUMENT,
  SELECT_CATEGORY,
  DONE,
} from '../../constants/steps';
import StepsAnim from '../anims/StepsAnim';
import DialogAnim from '../anims/DialogAnim';

const getContentToRender = (steps, props) => {
  if (steps.length === 0) {
    return <SelectActionAdd {...props} />;
  }
  const lastStep = steps[steps.length - 1];
  switch (lastStep.stepId) {
    case SELECT_WANT_TO_ADD:
      return <SelectActionAdd {...props} />;
    case ADD_CATEGORY:
      return <AddCategory {...props} />;
    case ADD_ARGUMENT:
      return <AddTodoArgument {...props} options={lastStep.options} />;
    case SELECT_CATEGORY:
      return <SelectCategory {...props} />;
    case DONE:
      return <Done {...props} />;
    default:
      return <SelectActionAdd {...props} />;
  }
};

class DialogAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      futureSteps: [],
      steps: [],
      showStep: true,
    };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onResetAndClose = this.onResetAndClose.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  onBack() {
    const { steps } = this.state;
    const { onClose } = this.props;
    const stepCount = steps.length;
    if (stepCount === 0) {
      // Returned to the first steps, close the dialog
      this.setState({ steps: [] });
      onClose();
    } else {
      this.setState({
        futureSteps: [
          ...steps.slice(0, steps.length - 1),
        ],
        showStep: false,
      });
    }
  }

  onNext(step = { stepId: '', options: {} }) {
    const { steps } = this.state;
    this.setState({
      futureSteps: [
        ...steps, {
          ...step,
        },
      ],
      showStep: false,
    });
  }

  onResetAndClose() {
    const { onClose } = this.props;
    onClose();
    setTimeout(() => {
      this.setState({ steps: [] });
    }, 500);
  }

  onAnimationEnd(node, done) {
    node.addEventListener('transitionend', () => {
      done();
      const { futureSteps, showStep } = this.state;
      if (showStep) {
        return;
      }
      this.setState({
        steps: [
          ...futureSteps,
        ],
        showStep: true,
      });
    }, false);
  }

  render() {
    const { steps, showStep } = this.state;
    const { onClose, open } = this.props;
    const { onNext, onResetAndClose, onAnimationEnd } = this;
    return (
      <DialogAnim in={open}>
        <div id="dialog-add" >
          <div className="dialog-header">
            <button id="main-close-button" onClick={() => onClose()}>
              <i className="material-icons">&#xE5CD;</i>
            </button>
          </div>

          <div className="dialog-container">
            <StepsAnim in={showStep} endListener={onAnimationEnd}>
              {getContentToRender(steps, { onNext, onClose: onResetAndClose })}
            </StepsAnim>
          </div>

          <div className="dialog-footer">
            <button
              id="back-button-dialog"
              className="text-button"
              onClick={() => this.onBack()}
            >
              NEVER MIND, GO BACK
            </button>
          </div>
        </div>
      </DialogAnim>
    );
  }
}

DialogAdd.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DialogAdd;
