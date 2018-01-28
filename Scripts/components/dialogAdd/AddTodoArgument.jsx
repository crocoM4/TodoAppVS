import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DONE } from '../../constants/steps';
import * as action from '../../actions';

class AddTodoArgument extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onButtonAddClick = this.onButtonAddClick.bind(this);
  }

  onInputTextChange(e) {
    this.setState({ title: e.target.value });
  }

  onButtonAddClick() {
    const { onAddClick, options } = this.props;
    onAddClick(this.state.title, options.selectedCategory, DONE);
  }

  render() {
    const { options } = this.props;
    return (
      <div className="content-add-argument">
        <h2>Add new ARGUMENT</h2>
        <h3>
          for the category:
          <span className="label-category-name">
            {` ${options.selectedCategory.name}`}
          </span>
        </h3>
        <div>
          <input
            className="main-input"
            type="text"
            placeholder="Type the description"
            onChange={this.onInputTextChange}
          />
        </div>
        <div>
          <button
            className="main-button"
            onClick={this.onButtonAddClick}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

AddTodoArgument.propTypes = {
  options: PropTypes.shape({
    selectedCategory: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onAddClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { steps } = state.dialogAdd;
  const lastStep = steps[steps.length - 1];
  return ({
    options: lastStep.options,
  });
};

const mapDispatchToProps = dispatch => (
  {
    onAddClick: (argumentTitle, category, nextStep) =>
      dispatch(action.addArgument(argumentTitle, category, nextStep)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoArgument);
