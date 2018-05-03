import { connect } from 'react-redux';
import VisibilityFilters from '../components/VisibilityFilters';
import { switchVisibilityFilter } from '../actions/todoFiltersActions';

import { getVisibilityFilter } from '../selectors/todoFiltersSelectors';

const mapStateToProps = state => (
  {
    selectedVisibilityFilter: getVisibilityFilter(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onVisibilitySwitchClick: visibility => () => (
      dispatch(switchVisibilityFilter(visibility))
    ),
  }
);

const VisibilityFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibilityFilters);

export default VisibilityFilterContainer;
