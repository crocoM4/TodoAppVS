import React from 'react'
import PropTypes from 'prop-types';
import * as action from '../actions';

class DialogAdd extends React.Component {
    constructor() {
        super();    
    }

    render() {

        let cssValue = {
            height: '0px',
            opacity: '0',
            visibility: 'hidden'
        };

        if (this.props.visibilityDialog) {
            cssValue = {
                display: 'block',
                height: '100vh',
                opacity: '1',
                visibility: 'visible'
            };
        }
        //height: 'calc(100vh - 2.5em * 2)',

        return (
            <div id="backdrop-dialog" style={cssValue}>
                <div id="dialog-add" >
                    <div className="dialog-header">
                        <button id="main-close-button" onClick={() => this.props.onChiudiDialog()}>
                            <i className="material-icons">&#xE5CD;</i>
                        </button>
                    </div>

                    <div className="dialog-container" ref="dialogContainer">
                        {this.props.renderContent}
                    </div>

                    <div className="dialog-footer">
                        <button id="back-button-dialog" className="text-button"
                            onClick={() => this.props.onTornaIndietro(this.props.counterProcessi)}>NEVER MIND, GO BACK</button>
                    </div>
                </div>
            </div>
        )
    }
}

DialogAdd.propTypes = {
    visibilityDialog: PropTypes.bool.isRequired,
    renderContent: PropTypes.object.isRequired,
    counterProcessi: PropTypes.number.isRequired,
    onChiudiDialog: PropTypes.func.isRequired,
    onTornaIndietro: PropTypes.func.isRequired
}

export default DialogAdd;