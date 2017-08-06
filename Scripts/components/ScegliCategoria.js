import React from 'react'

import PropTypes from 'prop-types';

import * as action from '../actions';

class ScegliCategoria extends React.Component {

    constructor() {
        super();

    }


    render() {

        let that = this;
        const { store } = this.context;

        return (
            <div className="content-scelta-add">
                <h2>Choose a CATEGORY</h2>

            </div>

        )
    }
}

ScegliCategoria.contextTypes = {
    store: PropTypes.object
};

export default ScegliCategoria;