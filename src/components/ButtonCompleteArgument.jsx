import React from 'react';
import PropTypes from 'prop-types';

const ButtonCompleteArgument = ({ onClick, completed }) => (
  <button
    className={`button-complete-argument ${(completed) ? 'button-completed-argument' : ''}`}
    onClick={onClick}
  >
    <i className="icon-ic-check" />
  </button>
);

ButtonCompleteArgument.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool,
};

ButtonCompleteArgument.defaultProps = {
  completed: false,
};

export default ButtonCompleteArgument;
