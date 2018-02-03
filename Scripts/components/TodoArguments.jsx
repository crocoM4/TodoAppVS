import React from 'react';
import PropTypes from 'prop-types';

import TodoArgument from './TodoArgument';

const TodoArguments = ({ listTodoArguments, onDeleteArgument, selectedCategories }) => (
  <div id="content-todo-arguments">
    {
      listTodoArguments.map((arg) => {
        if (selectedCategories.findIndex(cat => cat.id === arg.category.id
          || cat.id === '0') !== -1) {
            return (
              <TodoArgument
                key={arg.id}
                argument={arg}
                onDelete={() => onDeleteArgument(arg)}
              />
            );
          }
          return undefined;
      })
    }
  </div>
);

TodoArguments.propTypes = {
  onDeleteArgument: PropTypes.func.isRequired,
  listTodoArguments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoArguments;
