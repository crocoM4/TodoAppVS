import React from 'react'

class DoneAdd extends React.Component {

    constructor() {
        super();
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

export default DoneAdd;