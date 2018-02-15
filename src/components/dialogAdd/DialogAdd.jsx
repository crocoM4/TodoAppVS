import React from 'react';
import PropTypes from 'prop-types';

import SelectAction from './SelectActionAdd';
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

const getContentToRender = (steps, props) => {
  if (steps.length === 0) {
    return <SelectAction />;
  }
  const lastStep = steps[steps.length - 1];
  switch (lastStep.stepId) {
    case SELECT_WANT_TO_ADD:
      return <SelectAction {...props} />;
    case ADD_CATEGORY:
      return <AddCategory {...props} />;
    case ADD_ARGUMENT:
      return <AddTodoArgument {...props} options={lastStep.options} />;
    case SELECT_CATEGORY:
      return <SelectCategory {...props} />;
    case DONE:
      return <Done {...props} />;
    default:
      return <SelectAction {...props} />;
  }
};

class DialogAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
    };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
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
        steps: [
          ...steps.slice(0, steps.length - 1),
        ],
      });
    }
  }

  onNext(step = { stepId: '', options: {} }) {
    const { steps } = this.state;
    this.setState({
      steps: [
        ...steps, {
          ...step,
        },
      ],
    });
  }

  render() {
    const { steps } = this.state;
    const { isOpen, onClose } = this.props;
    const { onNext } = this;
    let cssValue = {
      height: '0px',
      opacity: '0',
      visibility: 'hidden',
    };

    if (isOpen) {
      cssValue = {
        display: 'block',
        height: '100vh',
        opacity: '1',
        visibility: 'visible',
      };
    }

    return (
      <div id="backdrop-dialog" style={cssValue}>
        <div id="dialog-add" >
          <div className="dialog-header">
            <button id="main-close-button" onClick={() => onClose()}>
              <i className="material-icons">&#xE5CD;</i>
            </button>
          </div>

          <div className="dialog-container">
            {getContentToRender(steps, { onNext, onClose })}
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
      </div>
    );
  }
}

DialogAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DialogAdd;
