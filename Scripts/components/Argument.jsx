import React from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteArgument from './ButtonDeleteArgument';

const Argument = ({ argument, onDelete }) => (
  <div className="argument-item">
    <p className="argument-title">{argument.title}</p>
    {
      onDelete !== undefined &&
      <ButtonDeleteArgument onClick={onDelete} />
    }
  </div>
);

Argument.propTypes = {
  onDelete: PropTypes.func,
  argument: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.shape({}).isRequired,
  }).isRequired,
};

Argument.defaultProps = {
  onDelete: undefined,
};

export default Argument;
