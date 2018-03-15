import React from 'react';
import PropTypes from 'prop-types';

const Action = ({ onClick, text }) => (
  <button className="button-action-snackbar" onClick={onClick}>
    {text}
  </button>
);

Action.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Snackbar = ({
  message, onClose, duration, isError, actionText, actionClick,
}) => (
  <div
    className={`snackbar ${(isError) ? '' : ''}`}
  >
    <span className="snackbar-message">{message}</span>
    {
      (actionText !== '' && actionClick !== undefined) &&
        <Action onClick={actionClick} text={actionText} />
    }
  </div>
);

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  isError: PropTypes.bool,
  actionText: PropTypes.string,
  actionClick: PropTypes.func,
};

Snackbar.defaultProps = {
  duration: 3000,
  isError: false,
  actionText: '',
  actionClick: undefined,
};

export default Snackbar;
