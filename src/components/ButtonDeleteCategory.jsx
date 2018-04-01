import React from 'react';
import PropTypes from 'prop-types';

const ButtonDeleteCategory = ({ onClick }) => (
  <button className="button-delete-category" onClick={onClick}>
    <i className="icon-delete" />
  </button>
);

ButtonDeleteCategory.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonDeleteCategory;
