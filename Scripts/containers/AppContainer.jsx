import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import { fetchAllCategories } from '../actions/categoriesActions';

const AppContainer = props => <App {...props} />;

export default connect({}, {
  fetchAllCategories,
})(AppContainer);
