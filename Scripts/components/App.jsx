import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainAddButton from '../components/MainAddButton';
import CategoriesFilterContainer from '../containers/CategoriesFilterContainer';
import TodoArgumentsContainer from '../containers/TodoArgumentsContainer';
import DialogAddContainer from '../containers/DialogAddContainer';

class App extends Component {
  componentWillMount() {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  render() {
    return (
      <div id="main-container">
        <div id="main-top-bar">
          <CategoriesFilterContainer />
          <MainAddButton />
        </div>
        <TodoArgumentsContainer />
        <DialogAddContainer />
      </div>
    );
  }
}

App.propTypes = {
  fetchAllCategories: PropTypes.func.isRequired,
};

export default App;
