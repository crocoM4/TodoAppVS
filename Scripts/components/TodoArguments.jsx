import React from 'react';
import PropTypes from 'prop-types';

import TodoArgument from './TodoArgument';

const TodoArguments = ({ listTodoArguments, onDeleteArgument }) => (
  <div id="content-todo-arguments">
    {
      listTodoArguments.map(arg => (
        <TodoArgument
          key={arg.id}
          argument={arg}
          onDelete={() => onDeleteArgument(arg)}
        />
      ))
    }
  </div>
);

TodoArguments.propTypes = {
  onDeleteArgument: PropTypes.func.isRequired,
  listTodoArguments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired).isRequired,
};

export default TodoArguments;
