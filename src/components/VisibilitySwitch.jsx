import React from 'react';
import PropTypes from 'prop-types';

const VisibilitySwitch = ({
  selected, children, onClick,
}) => (
  <div
    className={`visibility-button-switch align-items-center ${(selected) ? 'selected' : ''} `}
    onClick={onClick}
    role="presentation"
  >
    {children}
  </div>
);

VisibilitySwitch.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

VisibilitySwitch.defaultProps = {
  selected: false,
};

export default VisibilitySwitch;
