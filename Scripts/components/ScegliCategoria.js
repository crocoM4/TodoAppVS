import React from 'react'
import Categoria from './Categoria';
import PropTypes from 'prop-types';
import * as action from '../actions';

class ScegliCategoria extends React.Component {

    constructor() {
        super();

    }

    selezionaCategoria(store, categoria, e) {  
        action.selezionaCategoriaDialogAdd(store.dispatch, categoria);
    }

    confermaCategoriaSelezionata(store, categoriaSelezionata, e) {
        action.confermaCategoriaSelezionataDialogAdd(store.dispatch, categoriaSelezionata);
    }

    render() {

        let that = this;
        const { store } = this.context;

        let listaCategorie = store.getState().selezioneCategoria;
        let categoriaSelezionata;
        listaCategorie.some(cat => {
            if (cat.isSelezionata) {
                categoriaSelezionata = cat.oggettoCategoria;
                return true;
            }
        });

        //Nota che le categorie non hanno il tasto cancella
        return (
            <div className="content-scelta-add">
                <h2>Choose a CATEGORY</h2>
                <div id="content-scelta-categorie-add">           
                    {
                        listaCategorie.map(filtro =>
                            <Categoria key={filtro.oggettoCategoria.Id} categoria={filtro.oggettoCategoria}
                                isSelezionata={filtro.isSelezionata}
                                onSeleziona={that.selezionaCategoria.bind(this, store, filtro.oggettoCategoria)} />
                        )
                    }
                </div>
                <div>
                    <button className="main-button" onClick={
                        that.confermaCategoriaSelezionata.bind(
                            this,
                            store,
                            categoriaSelezionata
                        )}>NEXT</button>
                </div>
            </div>

        )
    }
}

ScegliCategoria.contextTypes = {
    store: PropTypes.object
};

export default ScegliCategoria;