import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainAddButton from './MainAddButton';

import FiltriCategorie from '../containers/FiltriCategorie';
import ListaArgomentiTodo from '../containers/ListaArgomentiTodo';
import DialogAddContainer from '../containers/DialogAddContainer';

class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div id="main-container">
        <div id="main-top-bar">
          <FiltriCategorie categoriaAllObject={this.props.categoriaAllObject} />
          <MainAddButton />
        </div>
        <ListaArgomentiTodo />
        <DialogAddContainer />
      </div>
    );
  }
}

App.propTypes = {
  categoriaAllObject: PropTypes.shape({}).isRequired,
};
App.contextTypes = {
  store: PropTypes.object,
};

export default App;
