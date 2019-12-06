import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Marketplace from '../components/Marketplace/Marketplace';
import MarketContainer from '../containers/MarketContainer/MarketContainer';
import SellerProfile from '../components/SellerProfile/SellerProfile';


export default ({ currentUser, setCurrentUser, guitars }) => (
  <div className="routes">
    <Switch>
      <Route exact path='/' render={() => <Landing guitars={guitars} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
      <Route path="/buy/" render={() => <MarketContainer guitars={guitars} currentUser={currentUser} /> } />
      <Route path="/sell/:id" render={() => <SellerProfile currentUser={currentUser} />} />
    </Switch>
  </div>
);
