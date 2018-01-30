import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import { fetchAllCategories } from '../actions/categoriesActions';

const AppContainer = props => <App {...props} />;

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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
