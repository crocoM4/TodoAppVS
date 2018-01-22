import React from 'react'
import Argomento from './Argomento';

import PropTypes from 'prop-types';

import * as action from '../actions';

class ListaArgomenti extends React.Component {

    constructor(){
        super();
        //this.state = {listaArgomenti:[]}

        //this.cancellaArgomento = this.cancellaArgomento.bind(this);
    }

    /*getAllArgomenti(){
      //Mi devo salvare il riferimento a "this" del component altrimenti mi prende il "this" della richiesta
      var prevThis = this;
      var query = new Parse.Query(Parse.Object.extend("argomenti"));
      query.find({
        success: function(results) {
          //prevThis.setState({listaCategorie:results});
          prevThis.setListaArgomenti(results);
        },
        error: function(error) {
          console.log(error.message);
        }
      });
    }
  
    componentDidMount() {
        this.getAllArgomenti();
    }
  
    setListaArgomenti(lista){
      this.setState({listaArgomenti: lista});
    }*/

    //cancellaArgomento(store, argomento, e) {
    //    action.cancellaArgomento(argomento, store, store.dispatch);
    //}

    render() {

        //let copiaListaArgomenti = this.state.listaArgomenti;
        //const {store} = this.context;
        //let listaArgomenti = store.getState().todoArgomenti;
        //let filtriCategorie = store.getState().filtriCategorie;
        //let filtroAll = store.getState().filtroCategoriaAll;

        //let that = this;


        //return (
        //    <div id="content-lista-argomenti">

        //        {listaArgomenti.map(arg => {

        //            if (filtroAll) {
        //                return <Argomento key={arg.oggettoArgomento.Id} argomento={arg.oggettoArgomento}
        //                    onCancella={that.cancellaArgomento.bind(this, store, arg.oggettoArgomento)}/>;
        //            } else {
        //                return filtriCategorie.map(filtro => {
        //                    if (filtro.isSelezionata && arg.oggettoArgomento.IdCategoria === filtro.oggettoCategoria.Id) {
        //                        return <Argomento
        //                            key={arg.oggettoArgomento.Id} argomento={arg.oggettoArgomento}
        //                            onCancella={that.cancellaArgomento.bind(this, store, arg.oggettoArgomento)} />;
        //                    }
        //                    return "";
        //                });
        //            }

        //        })}

        //    </div>
        //)

        console.log(this.props.listaArgomenti)

        return (
            <div id="content-lista-argomenti">

                {
                    this.props.listaArgomenti.map(arg => {

                        if (this.props.filtroCategoriaAll) {
                            return <Argomento key={arg.oggettoArgomento.Id} argomento={arg.oggettoArgomento}
                                onCancella={() => this.props.onCancellaArgomento(arg.oggettoArgomento)} />;
                        } else {
                            return this.props.listaFiltriCategorie.map(filtro => {
                                if (filtro.isSelezionata && arg.oggettoArgomento.IdCategoria === filtro.oggettoCategoria.Id) {
                                    return <Argomento
                                        key={arg.oggettoArgomento.Id} argomento={arg.oggettoArgomento}
                                        onCancella={() => this.props.onCancellaArgomento(arg.oggettoArgomento)} />;
                                }
                                return "";
                            });
                        }

                    })
                }

            </div>
        )
    }
}

ListaArgomenti.propTypes = {
    onCancellaArgomento: PropTypes.func,
    filtroCategoriaAll: PropTypes.bool.isRequired,
    listaFiltriCategorie: PropTypes.arrayOf(
        PropTypes.shape({
            isSelezionata: PropTypes.bool.isRequired,
            oggettoCategoria: PropTypes.shape({
                Id: PropTypes.string.isRequired,
                Nome: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    ).isRequired,
    listaArgomenti: PropTypes.arrayOf(
        PropTypes.shape({

            oggettoArgomento: PropTypes.shape({
                Id: PropTypes.string.isRequired,
                Titolo: PropTypes.string.isRequired,
                Descrizione: PropTypes.string.isRequired,
                isCompletato: PropTypes.bool.isRequired,
                IdCategoria: PropTypes.string.isRequired,
            }).isRequired
          
        }).isRequired
    
   ).isRequired
};

ListaArgomenti.contextTypes = {
    store: PropTypes.object
};

export default ListaArgomenti;


