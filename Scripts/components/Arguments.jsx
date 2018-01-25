import React from 'react';
import PropTypes from 'prop-types';

import Argument from './Argument';

const Arguments = ({ todoArguments, onDeleteArgument }) => (
  <div id="content-arguments-todo">
    {
      todoArguments.map(arg => (
        <Argument
          key={arg.id}
          argument={arg}
          onDelete={() => onDeleteArgument(arg)}
        />
      ))
    }
  </div>
);

Arguments.propTypes = {
  onDeleteArgument: PropTypes.func.isRequired,
  todoArguments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired).isRequired,
};

export default Arguments;
