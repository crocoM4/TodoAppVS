import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetSteps } from '../../actions/dialogAddActions';

class Done extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { dispatch } = this.props;
      dispatch(resetSteps());
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Done);
