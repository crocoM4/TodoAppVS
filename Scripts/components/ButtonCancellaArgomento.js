import React from 'react'
import PropTypes from 'prop-types'

const ButtonCancellaArgomento = (props) => {
    return (
        <button className="button-cancella-argomento" onClick={props.onCancella}>
            <i className="material-icons">&#xE5CD;</i>
        </button>
    )
}

ButtonCancellaArgomento.prototype = {
    onCancella: PropTypes.func
}



export default ButtonCancellaArgomento;