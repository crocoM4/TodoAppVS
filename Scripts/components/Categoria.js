import React from 'react'
import PropTypes from 'prop-types'
import ButtonCancellaCategoria from './ButtonCancellaCategoria';

class Categoria extends React.Component {

    /*constructor(){
      super();
      this.state = {isCategoriaSelezionata: false};
      this.selezionaCategoria = this.selezionaCategoria.bind(this);
    }
  
    componentWillMount() {
      //Inizializzo la categoria "All" come selezionata
      if(this.props.categoria._localId === "local0"){
        this.selezionaCategoria();
      }
    }*/

    /*selezionaCategoria(){
      if(this.state.isCategoriaSelezionata){
        this.setState({isCategoriaSelezionata: false});
      }else {
        this.setState({isCategoriaSelezionata: true});
      }
    }*/

    render() {
        let pulsanteCancella = null;

        if (this.props.categoria.Id !== "0" && this.props.onCancella !== undefined) {
            pulsanteCancella = <ButtonCancellaCategoria onCancella={this.props.onCancella} />
        }

        //var isSelezionata = this.state.isCategoriaSelezionata;

        var cssClass = "";

        if (this.props.isSelezionata) {
            cssClass = "categoria-selezionata"
        }

        //onClick={this.selezionaCategoria.bind(null)}
        return (
            <div className={cssClass + " chip-categoria centra-elementi"} onClick={this.props.onSeleziona}>
                <span className="testo-categoria">{this.props.categoria.Nome}</span>
                {pulsanteCancella}
            </div>
        )
    }
}

Categoria.propTypes = {
    onCancella: PropTypes.func,
    onSeleziona: PropTypes.func.isRequired,
    categoria: PropTypes.shape({
        Id: PropTypes.string.isRequired,
        Nome: PropTypes.string.isRequired
    }).isRequired
}


export default Categoria;


/*
<button className="button-cancella-categoria" onClick={this.props.onClick} >
  <i className="material-icons">&#xE5CD;</i>
</button>*/




//Questi sono è un'altro modo per creare un Component

/*var Categoria = React.createClass({

  render: function() {
    return (
      <div>
        <p>Sono una Categoria</p>
      </div>
    );
  }

});

module.exports = Categoria;*/
