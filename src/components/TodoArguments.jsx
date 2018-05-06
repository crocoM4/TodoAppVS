import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Resize from './anims/Resize';
import TodoArgument from './TodoArgument';

const TodoArguments = ({ listTodoArguments, onDeleteArgument, onCompleteArgument }) => (
  <div id="content-todo-arguments">
    <TransitionGroup>
      {
        listTodoArguments.map(arg => (
          <Resize key={arg.id}>
            <TodoArgument
              key={arg.id}
              argument={arg}
              onDelete={() => onDeleteArgument(arg)}
              onComplete={() => onCompleteArgument(arg)}
            />
          </Resize>
        ))
      }
    </TransitionGroup>
  </div>
);

TodoArguments.propTypes = {
  onDeleteArgument: PropTypes.func.isRequired,
  onCompleteArgument: PropTypes.func.isRequired,
  listTodoArguments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired).isRequired,
};

export default TodoArguments;
