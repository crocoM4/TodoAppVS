import React from 'react';
import { connect } from 'react-redux';

import Charts from '../components/Charts';
import { hideMessage } from '../actions/messageActions';

const ChartsContainer = props => <Charts {...props} />;

const mapStateToProps = state => (
  {
    message: state.message,
  }
);

const mapDispatchToProps = dispatch => (
  {
    hideMessage: () => {
      dispatch(hideMessage());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
