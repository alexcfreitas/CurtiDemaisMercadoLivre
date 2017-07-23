import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Destaque from '../curtiDemais/destaque'
import CurtiDeMais from '../curtiDemais/curtiDemais'
import ShotController from '../curtiDemais/shotViews/shotController'

export default props => (
  <Router history={hashHistory}>
      <Route path='/destaque' component={Destaque} />      
    <Route path='/curtiDemais' component={CurtiDeMais} />
    <Route path='/shot/:shot' component={ShotController} />
    <Redirect from='*' to='/destaque' />
  </Router>
)
