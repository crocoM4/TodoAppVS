import React from 'react'

class Argomento extends React.Component {

    /*  constructor(){
        super();
      }*/

    render() {
        return (
            <div className="item-argomento">
                <p className="titolo-argomento">{this.props.argomento.Titolo}</p>
            </div>
        )
    }
}

export default Argomento;
