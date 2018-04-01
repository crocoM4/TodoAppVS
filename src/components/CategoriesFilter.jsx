import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import ButtonArrow from './ButtonArrow';
import Category from './Category';
import Fade from './anims/Fade';

const CategoriesFilter = ({ categoryList, onDeleteCategory, onCilckCategory }) => (
  <div id="content-categories-filter">
    <ButtonArrow
      onClick={() => {}}
      direction="left"
    />
    <TransitionGroup className="categories-filter">
      {
        categoryList.map(category => (
          <Fade key={category.id}>
            <Category
              key={category.id}
              category={category}
              selected={category.selected}
              onDelete={onDeleteCategory}
              onClick={onCilckCategory}
            />
          </Fade>
        ))
      }
    </TransitionGroup>
    <ButtonArrow
      onClick={() => {}}
      direction="right"
    />
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
