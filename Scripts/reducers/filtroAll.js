const filtroCategoriaAll = (state = true, action) => {
    switch (action.type) {
        case 'TOOGLE_CATEGORIA':
            return false;
        case 'SELEZIONA_CATEGORIA_ALL':
            return true;
        default:
            return state;

    }
}

export default filtroCategoriaAll;
