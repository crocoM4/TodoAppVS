import React from 'react'
import PropTypes from 'prop-types'
import ButtonCancellaArgomento from './ButtonCancellaArgomento'

class Argomento extends React.Component {

    /*  constructor(){
        super();
      }*/

    render() {

        return (
            <div className="item-argomento">
                <p className="titolo-argomento">{this.props.argomento.Titolo}</p>
                <ButtonCancellaArgomento onCancella={this.props.onCancella} />
            </div>
        )
    }
}

Argomento.propTypes = {
    onCancella: PropTypes.func,
    argomento: PropTypes.shape({
        Id: PropTypes.string.isRequired,
        Titolo: PropTypes.string.isRequired,
        Descrizione: PropTypes.string.isRequired,
        isCompletato: PropTypes.bool.isRequired,
        IdCategoria: PropTypes.string.isRequired,
    }).isRequired
};

//const BottoneCancellaArgomento = (props) => {
//    return (
//            <button className="button-cancella-argomento" onClick={props.onCancella}>
//                <i className="material-icons">&#xE5CD;</i>
//            </button>
//        )
//}

export default Argomento;
