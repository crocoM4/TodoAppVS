import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

const CategoriesFilter = ({ categoryList, onDeleteCategory, onCilckCategory }) => (
  <div id="content-categories-filter">
    {
      categoryList.map(category => (
        <Category
          key={category.id}
          category={category}
          selected={category.selected}
          onDelete={onDeleteCategory}
          onClick={onCilckCategory}
        />
      ))
    }
  </div>
);

CategoriesFilter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeleteCategory: PropTypes.func,
  onCilckCategory: PropTypes.func.isRequired,
};

CategoriesFilter.defaultProps = {
  onDeleteCategory: undefined,
};

export default CategoriesFilter;
