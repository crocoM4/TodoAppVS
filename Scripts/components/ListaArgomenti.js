import React from 'react'
import Argomento from './Argomento';

import PropTypes from 'prop-types';

class ListaArgomenti extends React.Component {

    /*constructor(){
      super();
      //this.state = {listaArgomenti:[]}
    }*/

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

    render() {

        //let copiaListaArgomenti = this.state.listaArgomenti;
        const {store} = this.context;
        let listaArgomenti = store.getState().todoArgomenti;
        let filtriCategorie = store.getState().filtriCategorie;
        let filtroAll = store.getState().filtroCategoriaAll;


        return (
            <div id="content-lista-argomenti">

                {listaArgomenti.map(arg => {

                    if (filtroAll) {
                        return <Argomento key={arg.oggettoArgomento.Id} argomento={arg.oggettoArgomento} />;
                    } else {
                        return filtriCategorie.map(filtro => {
                            if (filtro.isSelezionata && arg.oggettoArgomento.IdCategoria === filtro.oggettoCategoria.Id) {
                                return <Argomento key={arg.oggettoArgomento.Id} argomento={arg.oggettoArgomento} />;
                            }
                            return "";
                        });
                    }

                })}

            </div>
        )
    }
}

ListaArgomenti.contextTypes = {
    store: PropTypes.object
};

export default ListaArgomenti;


