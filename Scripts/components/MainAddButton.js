import React from 'react'
import { connect } from 'react-redux'
//Dopo 15.5
//import PropTypes from 'prop-types';
import * as action from '../actions';


let createHandlers = (dispatch) => {
    let onClick = () => {
        action.toogleDialog(dispatch);
    }

    return {
        onClick,
        //altri handle in caso ci fossero
    }
}

class MainAddButton extends React.Component {

    constructor(props) {
        super(props);
        this.handlers = createHandlers(this.props.dispatch);
    }

    //apriDialog(store, e){
    //   /* store.dispatch({
    //        type: 'TOGGLE_DIALOG',
    //    });*/
    //    action.toogleDialog(store.dispatch);
    //}

    render() {

        //const {store} = this.context;
        //let that = this;
        //return (
        //    <button id="main-add-button" onClick={that.apriDialog.bind(this,store)} >
        //        <i className="material-icons">&#xE145;</i>
        //    </button>
        //)

        return (
            <button id="main-add-button" onClick={this.handlers.onClick} >
                <i className="material-icons">&#xE145;</i>
            </button>
        )
    }
}

//ATTENZIONE: Questo mi permette di indicare che il component riceve il "context"
//MainAddButton.contextTypes = {
//    store: PropTypes.object
//};

//export default MainAddButton;
export default connect()(MainAddButton)