import React from 'react'
import PropTypes from 'prop-types'

const ButtonCancellaCategoria = (props) => {
    return (
        <button className="button-cancella-categoria" onClick={props.onCancella}>
            <i className="material-icons">&#xE5CD;</i>
        </button>
    )
}


ButtonCancellaCategoria.propTypes = {
    onCancella: PropTypes.func
}

export default ButtonCancellaCategoria;
