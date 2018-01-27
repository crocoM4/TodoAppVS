import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from '../../actions';
import { ADD_CATEGORY, SELECT_CATEGORY } from '../../constants/steps';

const createHandlers = (dispatch) => {
  const onAddCategoryClick = () => {
    dispatch(action.goNextStep(ADD_CATEGORY, null));
  };
  const onAddArgumentClick = () => {
    dispatch(action.goNextStep(SELECT_CATEGORY, null));
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
          onClick={actionHandlers.onClickAggiungiCategoria}
          role="presentation"
        >
          CATEGORY
        </p>
      </div>
      <div className="item-scelta-add">
        <p
          className="titolo-scelta"
          onClick={actionHandlers.onClickAggiungiArgomento}
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
