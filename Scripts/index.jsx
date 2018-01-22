import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';
import * as config from './constants/Config';
import * as actions from './actions';

const store = createStore(reducers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App categoriaAllObject={config.categoriaAllObject} />
    </Provider>,
    document.getElementById('root'),
  );
};

actions.getAllCategorie(store.dispatch);

render();
