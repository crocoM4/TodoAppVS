import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }
  render() {
    return (
      <div className="loader" />
    );
  }
}

Loader.propTypes = {

};

export default Loader;
