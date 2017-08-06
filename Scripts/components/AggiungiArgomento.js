import React from 'react'

import PropTypes from 'prop-types';

import * as action from '../actions';

class AggiungiArgomento extends React.Component {

    constructor() {
        super();

    }

    aggiungiArgomento(store, categoriaCollagata) {
        action.aggiungiArgomento(
            this.refs.inputTitoloArgomento.value,
            categoriaCollagata.Id,
            "done-add",
            store.dispatch
        );
    }

    render() {

        let that = this;
        const { store } = this.context;

        console.log(store.getState())

        let listaStatiProcesso = store.getState().processoAdd;
        let categoriaCollegata = listaStatiProcesso[listaStatiProcesso.length - 1].oggettoCategoria;

        return (
            <div className="content-aggiungi-argomento">
                <h2>Add new ARGUMENT</h2>
                <h3>for the category:<span className="label-nome-categoria"> {categoriaCollegata.Nome} </span></h3>
                <div>
                    <input ref="inputTitoloArgomento" className="main-input" type="text" placeholder="Type the description" />
                </div>
                <div>
                    <button className="main-button" onClick={that.aggiungiArgomento.bind(this, store, categoriaCollegata)}>ADD</button>
                </div>
            </div>

        )
    }
}

AggiungiArgomento.contextTypes = {
    store: PropTypes.object
};

export default AggiungiArgomento;