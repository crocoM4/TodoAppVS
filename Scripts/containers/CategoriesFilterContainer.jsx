import { connect } from 'react-redux';
import CategoriesFilter from '../components/CategoriesFilter';
import * as action from '../actions';

const mapStateToProps = state => (
  {
    categoriesFilterList: state.categories.items,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onDeleteCategory: (category) => {
      dispatch(action.deleteCategory(category));
    },
    onCilckCategory: (category, e) => {
      if (e.target.tagName.toLowerCase() !== 'i' && e.target.tagName.toLowerCase() !== 'button') {
        if (category.Id === '0') {
          dispatch(action.selectCategoryAll());
        } else {
          dispatch(action.selectCategory(category));
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
