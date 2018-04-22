import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Snackbar from './Snackbar';


class Charts extends Component {
  componentDidMount() {
  }

  render() {
    const { message, hideMessage } = this.props;
    return (
      <div className="content-app">
        <p>In development</p>
        <Snackbar
          show={message.show}
          isError={message.isError}
          message={message.text}
          onClose={() => hideMessage()}
        />
      </div>
    );
  }
}

Charts.propTypes = {
  message: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hideMessage: PropTypes.func.isRequired,
};

export default Charts;
