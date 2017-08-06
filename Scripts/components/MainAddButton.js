import React from 'react'
//Dopo 15.5
import PropTypes from 'prop-types';
import * as action from '../actions';

class MainAddButton extends React.Component {

    apriDialog(store, e){
       /* store.dispatch({
            type: 'TOGGLE_DIALOG',
        });*/
        action.toogleDialog(store.dispatch);
    }

    render(){
        const {store} = this.context;
        let that = this;
        return (
            <button id="main-add-button" onClick={that.apriDialog.bind(this,store)} >
                <i className="material-icons">&#xE145;</i>
            </button>
        )
    }
}

//ATTENZIONE: Questo mi permette di indicare che il component riceve il "context"
MainAddButton.contextTypes = {
    store: PropTypes.object
};

export default MainAddButton;