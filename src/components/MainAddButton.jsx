import React from 'react';
import PropTypes from 'prop-types';

const MainAddButton = ({ onClick }) => (
  <button id="main-add-button" onClick={onClick} >
    <i className="material-icons">&#xE145;</i>
  </button>
);

MainAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MainAddButton;
