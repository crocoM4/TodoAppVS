import React from 'react'
import PropTypes from 'prop-types';
import * as action from '../actions';

class DoneAdd extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        //Resetto lo stato di selezione
        setTimeout(() => {
            const { store } = this.context;
            action.resettaProcessoAddAndToogleDialog(store);
        },3000);
       
    }

    render() {

        let that = this;
       
        return (
            <div className="content-done-add">
                <h2>Done!</h2>
                <div className="content-ic-done">
                    <img src="img/ic-done.svg" className="ic-done" />
                </div>
                
            </div>

        )
    }
}

DoneAdd.contextTypes = {
    store: PropTypes.object
}

export default DoneAdd;