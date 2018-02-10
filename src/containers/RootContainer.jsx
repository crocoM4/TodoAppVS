import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { fetchAllCategories } from '../actions/categoriesActions';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => (
  {

  }
);

const mapDispatchToProps = dispatch => (
  {
    dispatch,
    initFetchAllCategories: () => {
      dispatch(fetchAllCategories());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
