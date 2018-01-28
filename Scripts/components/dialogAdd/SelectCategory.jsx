import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Category from '../Category';
import * as action from '../../actions';

class SelectCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: this.props.categoriesList[0],
    };
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onButtonNextClick = this.onButtonNextClick.bind(this);
  }

  onCategoryClick(category) {
    this.setState({ selectedCategory: category });
  }

  onButtonNextClick() {
    this.props.onConfirmCategory(this.state.selectedCategory);
  }

  render() {
    const { categoriesList } = this.props;
    const { selectedCategory } = this.state;
    return (
      <div className="content-select-category">
        <h2>Choose a CATEGORY</h2>
        <div id="content-categories">
          {
            categoriesList.map(category => (
              <Category
                key={category.id}
                category={category}
                selected={category.id === selectedCategory.id}
                onClick={this.onCategoryClick}
              />
            ))
          }
        </div>
        <div>
          <button
            className="main-button"
            onClick={this.onButtonNextClick()}
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }
}

SelectCategory.propTypes = {
  categoriesList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onConfirmCategory: PropTypes.func.isRequired,
};

const mapStateToProp = state => (
  {
    categoriesList: state.categories.items,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onConfirmCategory: (category) => {
      dispatch(action.categorySelected(category));
    },
  }
);

export default connect(mapStateToProp, mapDispatchToProps)(SelectCategory);
