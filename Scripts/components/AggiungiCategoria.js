import React from 'react'

import PropTypes from 'prop-types';

import * as action from '../actions';

class AggiungiCategoria extends React.Component {

    constructor() {
        super();
        
    }

    aggiungiCategoria(store) {
        //console.log(this.refs.inputNomeCategoria.value);
        action.aggiungiCategoria(this.refs.inputNomeCategoria.value, "aggiungi-argomento", store.dispatch)
    }
   
    render() {

        let that = this;
        const { store } = this.context;

        return (
            <div className="content-aggiungi-categoria">
                <h2>Add new CATEGORY</h2>
                <div>
                    <input ref="inputNomeCategoria" className="main-input" type="text" placeholder="Type the name" />
                </div>
                <div>
                    <button className="main-button" onClick={that.aggiungiCategoria.bind(this, store)}>ADD</button>
                </div>
            </div>

        )
    }
}

AggiungiCategoria.contextTypes = {
    store: PropTypes.object
};

export default AggiungiCategoria;