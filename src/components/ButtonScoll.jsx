import React from 'react';
import PropTypes from 'prop-types';

const ButtonScroll = ({ onClick, direction }) => (
  <button className="button-scroll" onClick={onClick}>
    <i className={(direction === 'left') ? 'icon-backward' : 'icon-forward'} />
  </button>
);

ButtonScroll.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
};

ButtonScroll.defaultProps = {
  direction: 'left',
};

export default ButtonScroll;
