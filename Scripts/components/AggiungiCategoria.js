import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as action from '../actions';

let createHandlers = (dispatch) => {
    let onAddClick = (nomeCategoria) => {
        action.aggiungiCategoria(nomeCategoria, "aggiungi-argomento", dispatch)
    }
    return {
        onAddClick
    }
}

class AggiungiCategoria extends React.Component {

    constructor(props) {
        super(props);
        this.handlers = createHandlers(this.props.dispatch)
        this.state = {
            nomeCategoria: ''
        }
        this.onInputNomeCategoriaTextChange = this.onInputNomeCategoriaTextChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

    }

    onInputNomeCategoriaTextChange(e) {
        this.setState({ nomeCategoria: e.target.value })
    }

    onButtonClick() {
        this.handlers.onAddClick(this.state.nomeCategoria);
        //action.aggiungiCategoria(this.refs.inputNomeCategoria.value, "aggiungi-argomento", store.dispatch)
    }
   
    render() {

        return (
            <div className="content-aggiungi-categoria">
                <h2>Add new CATEGORY</h2>
                <div>
                    <input className="main-input" type="text" placeholder="Type the name" onChange={this.onInputNomeCategoriaTextChange} />
                </div>
                <div>
                    <button className="main-button" onClick={this.onButtonClick}>ADD</button>
                </div>
            </div>

        )
    }
}


export default connect()(AggiungiCategoria);