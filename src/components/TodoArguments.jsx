import React from 'react';
import PropTypes from 'prop-types';

import TodoArgument from './TodoArgument';

const TodoArguments = ({ listFilteredTodoArguments, onDeleteArgument, onCompleteArgument }) => (
  <div id="content-todo-arguments">
    {
      listFilteredTodoArguments.map(arg => (
        <TodoArgument
          key={arg.id}
          argument={arg}
          onDelete={() => onDeleteArgument(arg)}
          onComplete={() => onCompleteArgument(arg)}
        />
        ))
    }
  </div>
);

TodoArguments.propTypes = {
  onDeleteArgument: PropTypes.func.isRequired,
  onCompleteArgument: PropTypes.func.isRequired,
  listFilteredTodoArguments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired).isRequired,
};

export default TodoArguments;
