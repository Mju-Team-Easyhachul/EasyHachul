import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Detail from '../Routes/Detail';
import Download from '../Routes/Download';
import Faq from '../Routes/Faq';
import Home from '../Routes/Home';
import Report from '../Routes/Report';
import Search from '../Routes/Search';
import RouteMap from '../Routes/RouteMap';

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Detail:nodeId" component={Detail} />
        <Route path="/Download" component={Download} />
        <Route path="/Faq" component={Faq} />
        <Route path="/Report" component={Report} />
        <Route path="/Search" component={Search} />
        <Route path="/RouteMap" component={RouteMap} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
