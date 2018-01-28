import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from '../actions';

const createHandlers = (dispatch) => {
  const onClick = () => {
    action.toogleDialog(dispatch);
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

export default connect()(MainAddButton);
