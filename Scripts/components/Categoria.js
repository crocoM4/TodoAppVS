import React from 'react'

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

        if (this.props.categoria.Id !== "0") {
            pulsanteCancella = <BottoneCancellaCategoria onCancella={this.props.onCancella} />
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

const BottoneCancellaCategoria = (props) => {
    return (
        <button className="button-cancella-categoria" onClick={props.onCancella}>
            <i className="material-icons">&#xE5CD;</i>
        </button>
    )
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
