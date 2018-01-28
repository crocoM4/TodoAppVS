import { connect } from 'react-redux';
import CategoriesFilter from '../components/CategoriesFilter';
import {
  toogleSelectCategory,
  toogleSelectCategoryAll,
  deleteCategory,
} from '../actions/categoriesActions';

const mapStateToProps = state => (
  {
    categoriesFilterList: state.categories.items,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteCategory: (category) => {
      dispatch(deleteCategory(category));
    },
    onCilckCategory: (category, e) => {
      if (e.target.tagName.toLowerCase() !== 'i' && e.target.tagName.toLowerCase() !== 'button') {
        if (category.Id === '0') {
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
