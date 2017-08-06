import React from 'react'

import PropTypes from 'prop-types';

import * as action from '../actions';

class ScegliAdd extends React.Component {

    constructor(){
        super();
        this.selezionaProssimoProcesso = this.selezionaProssimoProcesso.bind(this);
    }

    selezionaProssimoProcesso(store, tipoAvanzamento) {        
        action.avanzaProcessoAdd(store.dispatch, tipoAvanzamento, null);        
    }

    render() {

        let that = this;
        const { store } = this.context;

        return (
            <div className="content-scelta-add">
                <h2>What would you like to add?</h2>
                <div className="item-scelta-add">
                    <p className="titolo-scelta" onClick={that.selezionaProssimoProcesso.bind(this,store,"aggiungi-categoria")}>CATEGORY</p>
                </div>
                <div className="item-scelta-add">
                    <p className="titolo-scelta" onClick={that.selezionaProssimoProcesso.bind(this, store,"scegli-categoria")}>ARGUMENT</p>
                </div>
            </div>
           
        )
    }
}

ScegliAdd.contextTypes = {
    store: PropTypes.object
};

export default ScegliAdd;