//Stato seleziona categoria nella dialog di add
const selezioneCategoria = (state = [], action) => {
    switch (action.type) {
        //Faccio in modo che la prima categoria sia sempre selezionata
        case 'GET_ALL_CATEGORIE_SELECT':
            return action.listaCategorie.map((cat, i) => {
                if (i == 0) {
                    return {
                        oggettoCategoria: cat,
                        isSelezionata: true
                    }
                }
                return {
                    oggettoCategoria: cat,
                    isSelezionata: false
                }
            });

        case 'TOOGLE_SELECT_CATEGORIA':
            //Al contrario del filtri faccio in modo che ne possa essere selezionata solo una
            return state.map(
                filtro => {
                    if (filtro.oggettoCategoria !== action.oggettoCategoria) {
                        return {
                            ...filtro,
                            isSelezionata: false
                        };
                    }
                    return {
                        ...filtro,
                        isSelezionata: true
                    };
                }
            );
       
        default:
            return state;
    }
};

export default selezioneCategoria