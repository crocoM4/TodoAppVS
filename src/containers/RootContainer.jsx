import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { fetchAllCategories } from '../actions/categoriesActions';
import { hideMessage } from '../actions/messageActions';

const RootContainer = props => <Root {...props} />;

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

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
