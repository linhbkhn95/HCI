import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {loadMenu,resetMenu} from 'actionMenu';

import {login,logout}  from 'app/action/actionAuthenticate.js';


var store = require('store');
console.log('const PrivateRoute = ({ component: Component, ...rest }) =>(');

console.log(store.getState());
const PrivateRoute = ({ component: Component, ...rest }) =>(

  <Route {...rest} render={props => (

   localStorage.jwToken? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/account/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
module.exports= connect(function(state){
  return{
     isAuthenticated:state.authenticate.isAuthenticated
  }
})(PrivateRoute);
 // props.isAuthenticated
