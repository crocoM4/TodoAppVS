import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import labels from '../../constants/labels';
import { ADD_ARGUMENT } from '../../constants/steps';
import { addCategory } from '../../actions/categoriesActions';
import { showMessageInfo } from '../../actions/messageActions';

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onButtonAddClick = this.onButtonAddClick.bind(this);
    this.onCategoryCreated = this.onCategoryCreated.bind(this);
  }

  onInputTextChange(e) {
    this.setState({ name: e.target.value });
  }

  onButtonAddClick() {
    const { name } = this.state;
    const { dispatch } = this.props;
    if (name === '') {
      dispatch(showMessageInfo(labels.msgNameRequired));
      return;
    }
    dispatch(addCategory(name, this.onCategoryCreated));
  }

  onCategoryCreated(selectedCategory) {
    const { onNext } = this.props;
    onNext({ stepId: ADD_ARGUMENT, options: { selectedCategory } });
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
            onClick={this.onButtonAddClick}
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
  onNext: PropTypes.func.isRequired,
};

export default connect()(AddCategory);
