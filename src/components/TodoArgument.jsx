import React from 'react';
import PropTypes from 'prop-types';
import ButtonCompleteArgument from './ButtonCompleteArgument';

const TodoArgument = ({ argument, onDelete, onComplete }) => (
  <div className="argument-item">
    <p
      className={`argument-title ${(argument.completed) ? 'argument-title-completed' : ''}`}
    >
      {argument.title}
    </p>
    {
      onComplete !== undefined &&
      <ButtonCompleteArgument
        onClick={onComplete}
        completed={argument.completed}
      />
    }
  </div>
);

TodoArgument.propTypes = {
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
  argument: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired,
};

TodoArgument.defaultProps = {
  onDelete: undefined,
  onComplete: undefined,
};

export default TodoArgument;
