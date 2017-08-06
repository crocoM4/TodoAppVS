import React from 'react'
//Dopo 15.5
import PropTypes from 'prop-types';
import ScegliAdd from './ScegliAdd';
import AggiungiCategoria from './AggiungiCategoria';
import ScegliCategoria from './ScegliCategoria';
import AggiungiArgomento from './AggiungiArgomento';
import DoneAdd from './DoneAdd';
import * as action from '../actions';

class DialogAdd extends React.Component {


    constructor() {
        super();    
    }

    chiudiDialog(store, e) {
        action.toogleDialog(store.dispatch);
    }

    tornaIndiero(store) {
        action.precedenteProcessoAdd(store);
    }

    renderContent(store) {

        let listaStati = store.getState().processoAdd;

        if (listaStati.length === 0) {
            return <ScegliAdd />
        }

        let ultimoStato = listaStati[listaStati.length - 1];
        
        switch (ultimoStato.tipoAvanzamento) {
            case 'aggiungi-categoria':
                return <AggiungiCategoria />
                break;
            case 'scegli-categoria':
                return <ScegliCategoria />
                break;
            case 'aggiungi-argomento':
                return <AggiungiArgomento />
                break;
            case 'done-add':
                return <DoneAdd />
                break;
            default:
                return <ScegliAdd />
        }
    }

    render() {

        const { store } = this.context;

        //console.log(store.getState().dialogAdd);


        let that = this;

        let cssValue = {
            height: '0px',
            opacity: '0',
            visibility: 'hidden'
        };
      
        if (store.getState().dialogAdd) {
            cssValue = {
                display: 'block',
                height: '100vh',
                opacity: '1',
                visibility: 'visible'
            };
        }
        //height: 'calc(100vh - 2.5em * 2)',

        return (
            <div id="backdrop-dialog" style={cssValue}>
                <div id="dialog-add" >
                    <div className="dialog-header">
                        <button id="main-close-button" onClick={that.chiudiDialog.bind(this, store)}>
                            <i className="material-icons">&#xE5CD;</i>
                        </button>
                    </div>
                
                    <div className="dialog-container" ref="dialogContainer">
                        {that.renderContent(store)}
                    </div>

                    <div className="dialog-footer">
                        <button id="back-button-dialog" className="text-button"
                            onClick={that.tornaIndiero.bind(this,store)}>NEVER MIND, GO BACK</button>
                    </div>
                </div>
            </div>
        )
    }
}

//ATTENZIONE: Questo mi permette di indicare che il component riceve il "context"
DialogAdd.contextTypes = {
    store: PropTypes.object
};

export default DialogAdd;