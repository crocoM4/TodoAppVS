import React from 'react';
import PropTypes from 'prop-types';
import SnackbarAnim from './anims/SnackbarAnim';

const Action = ({ onClick, text }) => (
  <button className="button-action-snackbar" onClick={onClick}>
    {text}
  </button>
);

Action.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class Snackbar extends React.Component {
  componentDidUpdate() {
    const {
      onClose, duration, show,
    } = this.props;

    if (show) {
      setTimeout(() => {
        onClose();
      }, duration);
    }
  }

  render() {
    const {
      message, isError, actionText, actionClick, show,
      verticalPostion, horizontalPosition,
    } = this.props;
    return (
      <SnackbarAnim in={show} customClass={`${verticalPostion} ${(horizontalPosition)}`}>
        <div
          className={`snackbar ${(isError) ? 'error' : ''}`}
        >
          <span className="snackbar-message">{message}</span>
          {
            (actionText !== '' && actionClick !== undefined) &&
              <Action onClick={actionClick} text={actionText} />
          }
        </div>
      </SnackbarAnim>
    );
  }
}

Snackbar.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  isError: PropTypes.bool,
  actionText: PropTypes.string,
  actionClick: PropTypes.func,
  verticalPostion: PropTypes.oneOf(['top', 'bottom']),
  horizontalPosition: PropTypes.oneOf(['left', 'right']),
};

Snackbar.defaultProps = {
  duration: 5000,
  isError: false,
  actionText: '',
  actionClick: undefined,
  verticalPostion: 'bottom',
  horizontalPosition: 'right',
};

export default Snackbar;
