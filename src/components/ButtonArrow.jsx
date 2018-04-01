import React from 'react';
import PropTypes from 'prop-types';

const ButtonArrow = ({ onClick, direction }) => (
  <button className="button-arrow" onClick={onClick}>
    <i className={(direction === 'left') ? 'icon-backward' : 'icon-forward'} />
  </button>
);

ButtonArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
};

ButtonArrow.defaultProps = {
  direction: 'left',
};

export default ButtonArrow;
