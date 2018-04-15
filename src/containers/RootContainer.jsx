import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';

const RootContainer = props => <Root {...props} />;

export default connect()(RootContainer);
