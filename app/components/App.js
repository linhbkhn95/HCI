var React = require('react');
var PrivateRoute = require('PrivateRoute');
import requireAuth from 'app/utils/requireAuth.js';
import {authenticate,logout_A} from 'app/action/actionAuthenticate.js';
//var {Router, Route, IndexRoute, hashHistory} = require('react-router');
import {BrowserRouter as Router,Route,Switch,Ridirect,hashHistory,Redirect} from 'react-router-dom';
 // var Router = ReactRouter.BrowserRouter;
 // var Layout = ReactRouter.Layout;
 // var Route = ReactRouter.Route;
 // var IndexRoute = ReactRouter.IndexRoute;
 // var hashHistory = ReactRouter.hashHistory;
 // var mathPath = ReactRouter.mathPath;
 // var Switch = ReactRouter.Switch;
 // var Reac
 // //quan li state




var {Provider} = require('react-redux');
var store = require('store');
var Layout = require('app/components/Layout.js');


//var MenuLeft = require('MenuLeft');
var Menu = require('Menu');
var HomePage = require('HomePage');
 var Login = require('app/components/Login.js');
var Account = require('Account');
var AddCreateAccountNDT = require('AddCreateAccountNDT');
var CloseAccount = require('CloseAccount2');
var CompareCommand =require('CompareCommand');
var Main = require('Main');
var SignIn  = require('SignIn');
var Captcha = require('Captcha');
var DatLenh = require('DatLenh');
var DauTuDinhKy = require('DauTuDinhKi');
var DemoResponsive = require('app/utils/TablePosition.js');
var RegisterAccount = require('app/components/account/Register.js');
var LoginPage = require('app/components/account/Login.js');
var GoBusiness = require('app/components/pages/GoBusiness.js');
import Repos from 'Repos';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

import {login,logout}  from 'app/action/actionAuthenticate.js';
 class App extends React.Component{

// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
//require('style!css!sass!./css/style.scss');
// $(document).ready(() => $(document).foundation());
     componentDidMount(){
       if(localStorage.jwToken){
           console.log('cssssssssssssssssssssssssssmm');
         //  setAuthorizationToken(localStorage.jwToken);
           store.dispatch(login(jwt.decode(localStorage.jwToken).username));
         }
     }
     render(){
        return(
            <Provider store={store}>
            <Router history={hashHistory}>
                  <Layout>
                   <Switch>

                      <PrivateRoute  exact   path="/" component={DemoResponsive}/>
                      <Route   path="/ac" component={Login}/>
                      <Route  path="/CreateAccountNDT" component={requireAuth(AddCreateAccountNDT,['me@gmail.com'])} />
                      <Route  path="/account/login" component={LoginPage} />
                      <Route  path="/account/register" component={RegisterAccount} />
                      <Route  path="/cmd" component={CompareCommand} />
                       <Route  path="/registerGoBusiness" component={GoBusiness} />
                      <Route  path="/datlenh" component={DatLenh} />
                      <Route  path="/dautudinhky" component={DauTuDinhKy} />
                      <Route  path="/captcha" component={Captcha} />

                      <Route path="/repos" component={requireAuth(CloseAccount,['manager', 'me@gmail.com'])}    />



                      <Route render={function(){
                          return <p> not found</p>
                      }
                    } />
                 </Switch>
               </Layout>
           </Router>
      </Provider>
    )
  }
}
module.exports = App;
