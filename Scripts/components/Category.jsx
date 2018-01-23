import React from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteCategory from './ButtonDeleteCategory';

const Category = ({ category, onClick, onDelete }) => {
  let cssClass = '';

  if (this.props.isSelezionata) {
    cssClass = 'category-selected';
  }
  return (
    <div
      className={`${cssClass} category-chip align-items-center`}
      onClick={onClick}
      role="presentation"
    >
      <span className="category-tex">{category.name}</span>
      {
        (category.id !== '0' && onDelete !== undefined) &&
          <ButtonDeleteCategory onClick={onDelete} />
      }
    </div>
  );
};

Category.propTypes = {
  onDelete: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

Category.defaultProps = {
  onDelete: undefined,
};

export default Category;
