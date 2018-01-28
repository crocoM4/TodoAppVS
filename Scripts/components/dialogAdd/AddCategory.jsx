import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ADD_ARGUMENT } from '../../constants/steps';
import * as action from '../../actions';

const createHandlers = (dispatch) => {
  const onAddClick = (categoryName) => {
    dispatch(action.addCategory(categoryName, ADD_ARGUMENT));
  };
  return {
    onAddClick,
  };
};

class AddCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.handlers = createHandlers(this.props.dispatch);
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onButtonAddClick = this.onButtonAddClick.bind(this);
  }

  onInputTextChange(e) {
    this.setState({ name: e.target.value });
  }

  onButtonAddClick() {
    this.handlers.onAddClick(this.state.name);
  }

  render() {
    return (
      <div className="content-add-category">
        <h2>Add new CATEGORY</h2>
        <div>
          <input
            className="main-input"
            type="text"
            placeholder="Type the name"
            onChange={this.onInputTextChange}
          />
        </div>
        <div>
          <button
            className="main-button"
            onClick={this.onButtonClick}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

AddCategory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddCategory);
