import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Layout from '../../Components/Layout';
import Home from './Home';
import ShortIt from './ShortIt';
import Subscription from './Subscription';

export default function DashBoard() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/home`} />
        </Route>
        <Route exact path={`${path}/home`}>
          <Home />
        </Route>
        <Route exact path={`${path}/shortit`}>
          <ShortIt />
        </Route>
        <Route exact path={`${path}/subscription`}>
          <Subscription />
        </Route>
      </Switch>
    </Layout>
  );
}
