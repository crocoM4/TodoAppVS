import React from 'react';
import Categoria from './Categoria';
//Dopo 15.5
import PropTypes from 'prop-types';

import * as action from '../actions';

class MenuCategorie extends React.Component {

    constructor() {
        super();
        this.selezionaCategoria = this.selezionaCategoria.bind(this);
        this.cancellaCategoria = this.cancellaCategoria.bind(this);
    }

    componentDidMount() {
        //const {store} = this.context;
    }


    selezionaCategoria(store, categoria, e) {
        //Se seleziono la categoria "All" tolgo lo stato selezionato a tutte le altre categorie
        /*if(categoria._localId === "local0"){
          this.state.listaCategorieSelezionate.splice(0, this.state.listaCategorieSelezionate.length);
        }
        else {
          var catOnArray = this.state.listaCategorieSelezionate.indexOf(categoria);
          if(catOnArray !== -1){
            this.state.listaCategorieSelezionate.splice(catOnArray, 1);
          }else {
            this.state.listaCategorieSelezionate.push(categoria);
          }
        }
    
        this.setState({listaCategorieSelezionate: this.state.listaCategorieSelezionate});*/


        //Controlle che l'elemento cliccato sia il pulsance cancella
        if (e.target.tagName.toLowerCase() !== 'i' && e.target.tagName.toLowerCase() !== 'button') {

            if (categoria.Id === "0") {
                store.dispatch({
                    type: 'SELEZIONA_CATEGORIA_ALL',
                });

            } else {
                store.dispatch({
                    type: 'TOOGLE_CATEGORIA',
                    oggettoCategoria: categoria
                });

            }

        }
        
    }

    cancellaCategoria(store, categoria, e) {
        action.cancellaCategoria(categoria, store.dispatch);
    }

    render() {

        const {store} = this.context;

        let oggettoFiltriCategorie = store.getState().filtriCategorie;
        let oggettoFiltroAll = store.getState().filtroCategoriaAll;

        var that = this;

        //Determino se la categoria "All" è selezionata o meno (Se c'è almeno una delle altre categorie è selezionata questa non è selezionata)
        /*let isCategoriaAllSelezionata = 1;//Categoria "All" selezionata
        if(this.state.listaCategorieSelezionate.length > 0){
          isCategoriaAllSelezionata = -1;//Categoria "All" NON selezionata
        }*/

        return (
            <div id="content-menu-categorie">
                <Categoria categoria={this.props.categoriaAllObject}
                    isSelezionata={oggettoFiltroAll}
                    onSeleziona={that.selezionaCategoria.bind(null, store, this.props.categoriaAllObject)} />
                {
                    oggettoFiltriCategorie.map(filtro => 
                            <Categoria key={filtro.oggettoCategoria.Id} categoria={filtro.oggettoCategoria}
                                isSelezionata={filtro.isSelezionata}
                                onCancella={that.cancellaCategoria.bind(this, store, filtro.oggettoCategoria)}
                                onSeleziona={that.selezionaCategoria.bind(this, store, filtro.oggettoCategoria)} />
                        )                    
                }
            </div>
        )
    }
}

//Prima di 15.4
//Questo component ha sempre una categoria "All" questa viene assegnata attraverso le propss
//MenuCategorie.propTypes = {
//    categoriaAllObject: React.PropTypes.object.isRequired
//};
//Dopo 15.5
MenuCategorie.propTypes = {
    categoriaAllObject: PropTypes.object.isRequired
};

//ATTENZIONE: Questo mi permette di indicare che il component riceve il "context"
MenuCategorie.contextTypes = {
    store: PropTypes.object
};

export default MenuCategorie;
