import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainAddButton from '../components/MainAddButton';
import CategoriesFilterContainer from '../containers/CategoriesFilterContainer';
import TodoArgumentsContainer from '../containers/TodoArgumentsContainer';
import DialogAddContainer from '../containers/DialogAddContainer';

class App extends Component {
  componentWillMount() {
    const { initFetchAllCategories } = this.props;
    initFetchAllCategories();
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div id="main-container">
        <div id="main-top-bar">
          <CategoriesFilterContainer />
          <MainAddButton
            dispatch={dispatch}
          />
        </div>
        <TodoArgumentsContainer />
        <DialogAddContainer />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  initFetchAllCategories: PropTypes.func.isRequired,
};

export default App;
