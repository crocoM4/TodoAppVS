import { connect } from 'react-redux';
import CategoriesFilter from '../components/CategoriesFilter';
import {
  toogleSelectCategory,
  toogleSelectCategoryAll,
  deleteCategory,
} from '../actions/todoFiltersActions';
import categoryAll from '../constants/config';

import { getFilterCategoriesList } from '../selectors/todoFiltersSelectors';

const mapStateToProps = state => (
  {
    categoryList: getFilterCategoriesList(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteCategory: (category) => {
      dispatch(deleteCategory(category.id));
    },
    onCilckCategory: (category, e) => {
      if (e.target.tagName.toLowerCase() !== 'i' && e.target.tagName.toLowerCase() !== 'button') {
        if (category.id === categoryAll.id) {
          dispatch(toogleSelectCategoryAll());
        } else {
          dispatch(toogleSelectCategory(category));
        }
      }
    },
  }
);

const CategoriesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesFilter);

export default CategoriesFilterContainer;
