import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Drawer from '../components/Drawer';
import TodosContainer from '../containers/TodosContainer';
import ChartsContainer from '../containers/ChartsContainer';
import * as paths from '../constants/paths';

const Root = () => (
  <Router>
    <div id="main-container">
      <div id="flex-container">
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
