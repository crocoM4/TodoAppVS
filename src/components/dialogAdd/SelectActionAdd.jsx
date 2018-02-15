import React from 'react';
import PropTypes from 'prop-types';

import { ADD_CATEGORY, SELECT_CATEGORY } from '../../constants/steps';

const SelectActionAdd = ({ onNext }) => (
  <div className="content-scelta-add">
    <h2>What would you like to add?</h2>
    <div className="item-scelta-add">
      <p
        className="titolo-scelta"
        onClick={() => onNext({ stepId: ADD_CATEGORY, options: {} })}
        role="presentation"
      >
        CATEGORY
      </p>
    </div>
    <div className="item-scelta-add">
      <p
        className="titolo-scelta"
        onClick={() => onNext({ stepId: SELECT_CATEGORY, options: {} })}
        role="presentation"
      >
        ARGUMENT
      </p>
    </div>
  </div>
);

SelectActionAdd.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default SelectActionAdd;
