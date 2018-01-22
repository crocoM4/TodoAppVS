import React from 'react';

import { connect } from 'react-redux';
import DialogAdd from '../components/DialogAdd';
import * as action from '../actions';

import ScegliAdd from '../components/ScegliAdd';
import AggiungiCategoria from '../components/AggiungiCategoria';
import ScegliCategoria from '../components/ScegliCategoria';
import AggiungiArgomento from '../components/AggiungiArgomento';
import DoneAdd from '../components/DoneAdd';

const getRenderContent = (listaStati) => {
  if (listaStati.length === 0) {
    return <ScegliAdd />;
  }
  const ultimoStato = listaStati[listaStati.length - 1];
  switch (ultimoStato.tipoAvanzamento) {
    case 'aggiungi-categoria':
      return <AggiungiCategoria />;
    case 'scegli-categoria':
      return <ScegliCategoria />;
    case 'aggiungi-argomento':
      return <AggiungiArgomento />;
    case 'done-add':
      return <DoneAdd />;
    default:
      return <ScegliAdd />;
  }
};

const mapStateToProps = state => (
  {
    visibilityDialog: state.visibilityDialogAdd,
    renderContent: getRenderContent(state.processoAdd),
    counterProcessi: state.processoAdd.length,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onChiudiDialog: () => {
      action.toogleDialog(dispatch);
    },
    onTornaIndietro: (counterProcessi) => {
      action.precedenteProcessoAdd(dispatch, counterProcessi);
    },
  }
);

const DialogAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogAdd);

export default DialogAddContainer;
