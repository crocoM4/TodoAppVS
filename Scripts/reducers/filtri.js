//Stato dei filtro della Categoria.
//Azione "AGGIUNGI_CATEGORIA" aggiunge un oggetto categoria e la proprietà isSelezionata viene impostato a false
//Azione "TOOGLE_CATEGORIA" quando viene cliccata su una categoria cambia la propietà isSelezionata
const filtriCategorie = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIE_SUCCESS':
            return action.listaCategorie.map(cat => {
                return {
                    oggettoCategoria: cat,
                    isSelezionata: false
                }
            });

        case 'AGGIUNGI_CATEGORIA':
            return [
                ...state, {
                    oggettoCategoria: action.oggettoCategoria,
                    isSelezionata: false
                }
            ];
        case 'TOOGLE_CATEGORIA':
            return state.map(
                filtro => {
                    if (filtro.oggettoCategoria !== action.oggettoCategoria) {
                        return filtro;
                    }
                    return {
                        ...filtro,
                        isSelezionata: !filtro.isSelezionata
                    };
                }
            );
        case 'SELEZIONA_CATEGORIA_ALL':
            return state.map(
                filtro => {
                    return {
                        ...filtro,
                        isSelezionata: false
                    };
                }
            );
        default:
            return state;
    }
};

export default filtriCategorie
