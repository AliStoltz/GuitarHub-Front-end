import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';

import './Routes.css';

export default ({ currentUser, setCurrentUser }) => (
  <div className="routes">
    <Switch>
      <Route exact path='/' componant={Landing} />
      <Route path="/buy" />
      <Route path="/sell/:userId" />
    </Switch>
  </div>
);