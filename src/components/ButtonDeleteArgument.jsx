import React from 'react';
import PropTypes from 'prop-types';

const ButtonDeleteArgument = ({ onClick }) => (
  <button className="button-delete-argument" onClick={onClick}>
    <i className="icon-ic-delete" />
  </button>
);

ButtonDeleteArgument.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonDeleteArgument;
