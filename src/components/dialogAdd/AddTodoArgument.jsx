import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DONE } from '../../constants/steps';
import { executeAddTodoArgument } from '../../actions/todoArgumentsActions';

class AddTodoArgument extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onButtonAddClick = this.onButtonAddClick.bind(this);
    this.onTodoArgumentCreated = this.onTodoArgumentCreated.bind(this);
  }

  onInputTextChange(e) {
    this.setState({ title: e.target.value });
  }

  onButtonAddClick() {
    const { options, dispatch } = this.props;
    const { title } = this.state;
    if (title === '') {
      return;
    }
    dispatch(executeAddTodoArgument(title, options.selectedCategory, this.onTodoArgumentCreated));
  }

  onTodoArgumentCreated() {
    const { onNext } = this.props;
    onNext({ stepId: DONE, options: { } });
  }

  render() {
    const { selectedCategory } = this.props.options;
    return (
      <div className="content-add-argument">
        <h2>Add new ARGUMENT</h2>
        <h3>
          for the category:
          <span className="label-category-name">
            {` ${selectedCategory.name}`}
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
  dispatch: PropTypes.func.isRequired,
  options: PropTypes.shape({
    selectedCategory: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
};

export default connect()(AddTodoArgument);
