﻿import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goNextStep } from '../../actions/dialogAddActions';
import { ADD_CATEGORY, SELECT_CATEGORY } from '../../constants/steps';

const createHandlers = (dispatch) => {
  const onAddCategoryClick = () => {
    dispatch(goNextStep(ADD_CATEGORY));
  };
  const onAddArgumentClick = () => {
    dispatch(goNextStep(SELECT_CATEGORY));
  };

  return {
    onAddCategoryClick,
    onAddArgumentClick,
  };
};

const SelectActionAdd = ({ dispatch }) => {
  const actionHandlers = createHandlers(dispatch);
  return (
    <div className="content-scelta-add">
      <h2>What would you like to add?</h2>
      <div className="item-scelta-add">
        <p
          className="titolo-scelta"
          onClick={actionHandlers.onAddCategoryClick}
          role="presentation"
        >
          CATEGORY
        </p>
      </div>
      <div className="item-scelta-add">
        <p
          className="titolo-scelta"
          onClick={actionHandlers.onAddArgumentClick}
          role="presentation"
        >
          ARGUMENT
        </p>
      </div>
    </div>
  );
};

SelectActionAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SelectActionAdd);