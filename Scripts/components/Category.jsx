import React from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteCategory from './ButtonDeleteCategory';

const Category = ({
  category, selected, onClick, onDelete,
}) => {
  let cssClass = '';

  const onChipClick = (e) => {
    onClick(category, e);
  };
  const onDeleteClick = () => {
    onDelete(category);
  };

  if (selected) {
    cssClass = 'category-selected';
  }
  return (
    <div
      className={`${cssClass} category-chip align-items-center`}
      onClick={onChipClick}
      role="presentation"
    >
      <span className="category-text">{category.name}</span>
      {
        (category.id !== '0' && onDelete !== undefined) &&
          <ButtonDeleteCategory onClick={onDeleteClick} />
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
  selected: PropTypes.bool.isRequired,
};

Category.defaultProps = {
  onDelete: undefined,
};

export default Category;
