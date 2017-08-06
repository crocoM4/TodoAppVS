const processoAdd = (state = [], action) => {
    switch (action.type) {

        case 'CONTINUA_PROCESSO':
            return [
                ...state, {
                    tipoAvanzamento: action.tipoAvanzamento,
                    oggettoCategoria: action.oggettoCategoria
                }
            ];

        case 'PRECENDENTE_PROCESSO':
            //Rimuove l'ultimo item contenuto nell'array facendone una copia | state originale non viene modificato
            return [
                ...state.slice(0, state.length - 1)
            ];

            //Rimuove un item in un array nella determinata posizione
            //return [
            //    ...state.slice(0, index),
            //    ...state.slice(index+1)
            //];


        default:
            return state;
    }
};

export default processoAdd