import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import RootContainer from './containers/RootContainer';
import reducers from './reducers';

import '../Style/sass/main.sass';

const store = createStore(reducers, applyMiddleware(thunk));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(RootContainer);
