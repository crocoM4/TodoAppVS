import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

const CategoriesFilter = ({ categoriesFilterList, onDeleteCategory, onCilckCategory }) => (
  <div id="content-categories-filter">
    {
      categoriesFilterList.map(categoryFilter => (
        <Category
          key={categoryFilter.category.id}
          category={categoryFilter.category}
          selected={categoryFilter.selected}
          onDelete={onDeleteCategory}
          onClick={onCilckCategory}
        />
      ))
    }
  </div>
);

CategoriesFilter.propTypes = {
  categoriesFilterList: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    category: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  onDeleteCategory: PropTypes.func,
  onCilckCategory: PropTypes.func.isRequired,
};

CategoriesFilter.defaultProps = {
  onDeleteCategory: undefined,
};

export default CategoriesFilter;
