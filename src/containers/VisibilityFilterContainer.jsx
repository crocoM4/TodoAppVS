import { connect } from 'react-redux';
import VisibilityFilters from '../components/VisibilityFilters';
import { changeVisibility } from '../actions/todoFiltersActions';

import { getVisibilityFilter } from '../selectors/todoFiltersSelectors';

const mapStateToProps = state => (
  {
    selectedVisibilityFilter: getVisibilityFilter(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onVisibilitySwitchClick: visibility => () => (
      dispatch(changeVisibility(visibility))
    ),
  }
);

const VisibilityFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibilityFilters);

export default VisibilityFilterContainer;
