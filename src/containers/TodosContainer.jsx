import React from 'react';
import { connect } from 'react-redux';

import Todos from '../components/Todos';
import { fetchAllCategories } from '../actions/todoFiltersActions';
import { hideMessage } from '../actions/messageActions';

const TodosContainer = props => <Todos {...props} />;

const mapStateToProps = state => (
  {
    message: state.message,
  }
);

const mapDispatchToProps = dispatch => (
  {
    hideMessage: () => {
      dispatch(hideMessage());
    },
    initFetchAllCategories: () => {
      dispatch(fetchAllCategories());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
