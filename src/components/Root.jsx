import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainAddButton from '../components/MainAddButton';
import CategoriesFilterContainer from '../containers/CategoriesFilterContainer';
import TodoArgumentsContainer from '../containers/TodoArgumentsContainer';
import DialogAdd from './dialogAdd/DialogAdd';
import Snackbar from './Snackbar';
import DialogAnim from './anims/DialogAnim';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogAddOpen: false,
      isSnakbarOpen: true,
    };
  }

  componentWillMount() {
    const { initFetchAllCategories } = this.props;
    initFetchAllCategories();
  }

  render() {
    const { isDialogAddOpen, isSnakbarOpen } = this.state;
    return (
      <div id="main-container">
        <div id="main-top-bar">
          <CategoriesFilterContainer />
          <MainAddButton
            onClick={() => this.setState({ isDialogAddOpen: true })}
          />
        </div>
        <TodoArgumentsContainer />
        <DialogAnim in={isDialogAddOpen}>
          <DialogAdd
            onClose={() => this.setState({ isDialogAddOpen: false })}
          />
        </DialogAnim>
        <Snackbar
          message="Lorem ipsum"
          onClose={() => this.setState({ isSnakbarOpen: false })}
          actionText="Action"
          actionClick={() => { this.setState({ isSnakbarOpen: false }); }}
        />
      </div>
    );
  }
}

Root.propTypes = {
  initFetchAllCategories: PropTypes.func.isRequired,
};

export default Root;
