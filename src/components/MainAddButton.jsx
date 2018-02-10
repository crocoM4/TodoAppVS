import React from 'react';
import PropTypes from 'prop-types';

import { toogleOpen } from '../actions/dialogAddActions';

const createHandlers = (dispatch) => {
  const onClick = () => {
    dispatch(toogleOpen(true));
  };
  return {
    onClick,
  };
};

const MainAddButton = ({ dispatch }) => {
  const handlers = createHandlers(dispatch);
  return (
    <button id="main-add-button" onClick={handlers.onClick} >
      <i className="material-icons">&#xE145;</i>
    </button>
  );
};

MainAddButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default MainAddButton;
