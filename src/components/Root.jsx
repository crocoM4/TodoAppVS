import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainAddButton from '../components/MainAddButton';
import CategoriesFilterContainer from '../containers/CategoriesFilterContainer';
import TodoArgumentsContainer from '../containers/TodoArgumentsContainer';
import DialogAdd from './dialogAdd/DialogAdd';
import Snackbar from './Snackbar';


class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogAddOpen: false,
    };
  }

  componentDidMount() {
    const { initFetchAllCategories } = this.props;
    initFetchAllCategories();
  }

  render() {
    const { isDialogAddOpen } = this.state;
    const { message, hideMessage } = this.props;
    return (
      <div id="main-container">
        <div id="main-top-bar">
          <CategoriesFilterContainer />
          <MainAddButton
            onClick={() => this.setState({ isDialogAddOpen: true })}
          />
        </div>
        <TodoArgumentsContainer />
        <DialogAdd
          open={isDialogAddOpen}
          onClose={() => this.setState({ isDialogAddOpen: false })}
        />
        <Snackbar
          show
          isError={message.isError}
          message={message.text}
          onClose={() => hideMessage()}
        />
      </div>
    );
  }
}

Root.propTypes = {
  message: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hideMessage: PropTypes.func.isRequired,
  initFetchAllCategories: PropTypes.func.isRequired,
};

export default Root;
