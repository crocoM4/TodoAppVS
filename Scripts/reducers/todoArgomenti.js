const todoArgomenti = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_ARGOMENTI_SUCCESS':
            return action.listaArgomenti.map(arg => {
                return {
                    oggettoArgomento: arg
                }
            });

        case 'AGGIUNGI_ARGOMENTO':
            return [
                ...state, {
                    oggettoArgomento: action.oggettoArgomento
                }
            ];

        default:
            return state;
    }
};

export default todoArgomenti
