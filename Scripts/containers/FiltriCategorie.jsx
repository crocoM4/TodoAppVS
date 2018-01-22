import { connect } from 'react-redux';
import MenuCategorie from '../components/MenuCategorie';
import * as action from '../actions';

const mapStateToProps = state => (
  {
    listaFiltriCategorie: state.filtriCategorie,
    filtroCategoriaAll: state.filtroCategoriaAll,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onCancellaCategoria: (categoria) => {
      action.cancellaCategoria(categoria, dispatch);
    },
    onSelezionaCategoria: (categoria, e) => {
      if (e.target.tagName.toLowerCase() !== 'i' && e.target.tagName.toLowerCase() !== 'button') {
        if (categoria.Id === '0') {
          dispatch({
            type: 'SELEZIONA_CATEGORIA_ALL',
          });
        } else {
          dispatch({
            type: 'TOOGLE_CATEGORIA',
            oggettoCategoria: categoria,
          });
        }
      }
    },
  }
);

const FiltriCategorie = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuCategorie);

export default FiltriCategorie;
