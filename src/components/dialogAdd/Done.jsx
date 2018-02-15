import React from 'react';
import PropTypes from 'prop-types';

class Done extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { onClose } = this.props;
      onClose();
    }, 3000);
  }

  render() {
    return (
      <div className="content-done-add">
        <h2>Done!</h2>
        <div className="content-ic-done">
          <img
            src="img/ic-done.svg"
            className="ic-done"
            alt="done icon"
          />
        </div>
      </div>
    );
  }
}

Done.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Done;
