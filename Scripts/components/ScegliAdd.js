import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as action from '../actions';

let createHandlers = (dispatch) => {
    let onClickAggiungiCategoria = () => {
        action.avanzaProcessoAdd(dispatch, "aggiungi-categoria", null);  
    }
    let onClickAggiungiArgomento = () => {
        action.avanzaProcessoAdd(dispatch, "scegli-categoria", null);
    }

    return {
        onClickAggiungiCategoria,
        onClickAggiungiArgomento
    }
}

class ScegliAdd extends React.Component {

    constructor(props){
        super(props);
        this.actionHandlers = createHandlers(this.props.dispatch)
    }

    render() {

        return (
            <div className="content-scelta-add">
                <h2>What would you like to add?</h2>
                <div className="item-scelta-add">
                    <p className="titolo-scelta" onClick={this.actionHandlers.onClickAggiungiCategoria}>CATEGORY</p>
                </div>
                <div className="item-scelta-add">
                    <p className="titolo-scelta" onClick={this.actionHandlers.onClickAggiungiArgomento}>ARGUMENT</p>
                </div>
            </div>
           
        )
    }
}

export default connect()(ScegliAdd);