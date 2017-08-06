import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllCategorie } from './actions'
import * as config from './constants/Config';

import MenuCategorie from './components/MenuCategorie';
import ListaArgomenti from './components/ListaArgomenti';
import MainAddButton from './components/MainAddButton';
import DialogAdd from './components/DialogAdd';
//import '../static/css/main.css'

class App extends Component {

    /*componentDidMount() {
        const {store} = this.context;
        getAllCategorie(store.dispatch);
    }*/

    render() {
        return (
            <div id="main-container">
                <div id="main-top-bar">
                    <MenuCategorie categoriaAllObject={this.props.categoriaAllObject} />
                    <MainAddButton />
                </div>
                <ListaArgomenti />
                <DialogAdd />
            </div>
        );
    }
}

App.propTypes = {
    categoriaAllObject: PropTypes.object.isRequired
};
App.contextTypes = {
    store: PropTypes.object
};


export default App;
//export default connect()(App);