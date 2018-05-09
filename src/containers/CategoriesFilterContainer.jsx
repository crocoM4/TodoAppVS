import { connect } from 'react-redux';
import CategoriesFilter from '../components/CategoriesFilter';
import {
  selectCategory,
  selectCategoryAll,
  deleteCategory,
} from '../actions/todoFiltersActions';
import categoryAll from '../constants/config';

import { getCategoriesFilterList } from '../selectors/todoFiltersSelectors';

const mapStateToProps = state => (
  {
    categoryList: getCategoriesFilterList(state),
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
          dispatch(selectCategoryAll());
        } else {
          dispatch(selectCategory(category));
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
