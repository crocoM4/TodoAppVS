import React from 'react';
import PropTypes from 'prop-types';
import ButtonCompleteArgument from './ButtonCompleteArgument';
import ButtonDeleteArgument from './ButtonDeleteArgument';

class TodoArgument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onTitleClick() {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  }

  render() {
    const { argument, onDelete, onComplete } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="argument-item">
        <div className="argument-header">
          <p
            className={`argument-title ${(argument.completed) ? 'argument-title-completed' : ''}`}
            onClick={() => this.onTitleClick()}
            role="presentation"
          >
            {argument.title}
          </p>
          {
            collapsed &&
            <ButtonDeleteArgument
              onClick={onDelete}
            />
          }
          {
            onComplete !== undefined &&
            <ButtonCompleteArgument
              onClick={onComplete}
              completed={argument.completed}
            />
          }
        </div>
        {
          collapsed &&
          <div className="argument-body">
            <p className="argument-description">
              {
                (argument.description !== undefined && argument.description !== '')
                ? argument.description : <span className="empty">No description to show :(</span>
              }
            </p>
          </div>
        }
      </div>
    );
  }
}

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
