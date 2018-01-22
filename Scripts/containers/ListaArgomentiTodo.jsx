import { connect } from 'react-redux';
import ListaArgomenti from '../components/ListaArgomenti';
import * as action from '../actions';

const mapStateToProps = state => (
  {
    listaFiltriCategorie: state.filtriCategorie,
    filtroCategoriaAll: state.filtroCategoriaAll,
    listaArgomenti: state.todoArgomenti,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onCancellaArgomento: (argomento, categoria) => {
      action.cancellaArgomento(argomento, categoria, dispatch);
    },
  }
);

const ListaArgomentiTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaArgomenti);

export default ListaArgomentiTodo;
