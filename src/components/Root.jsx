import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoaderLinear from '../components/LoaderLinear';
import Drawer from '../components/Drawer';
import * as paths from '../constants/paths';

const TodosContainer = Loadable({
  loader: () => import('../containers/TodosContainer' /* webpackChunkName: 'todos' */), 
  loading: LoaderLinear,
});

const ChartsContainer = Loadable({
  loader: () => import('../containers/ChartsContainer' /* webpackChunkName: 'charts' */),
  loading: LoaderLinear,
});

const Root = () => (
  <Router>
    <div id="main-container">
      <div id="flex-container">
        <Route
          exact
          path="/"
          render={() => <Redirect to={paths.TODOS} />}
        />
        <Drawer />
        <Switch>
          <Route
            path={paths.TODOS}
            exact
            component={TodosContainer}
          />
          <Route
            path={paths.CHARTS}
            exact
            component={ChartsContainer}
          />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Root;
