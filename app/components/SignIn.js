import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Captcha from 'Captcha';
import Notification from 'Notification';
import {loadMenu,resetMenu} from 'actionMenu';
import {showNotifi} from 'actionNotification';
import {login,logout} from 'actionUserName';

import {authenticate} from 'app/action/actionAuthenticate.js';
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
io.socket.on('user', function gotHelloMessage (data) {
  console.log('User alert!', data);
});
console.log(localStorage.jwtToken);
io.socket.get('/user', {sort: 'createdAt', limit: 10}, function(data, jwr){
      if (jwr.statusCode == 200){
          console.log(data);
      } else {
          console.log( jwr.statusCode);
      }
  });
class SignIn extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch,veryfiCaptcha} = this.props;
    var {username, password} = this.refs;

    //  io.socket.get('/session/userlogin',{u:username.value}, function gotResponse(data, jwRes) {
    //     console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
    //   });
      axios.post('auth/index', {email: username.value,password: password.value})
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwToken',res.data.token);
        setAuthorizationToken(res.data.token);
       dispatch(setCurrentUser(jwtDecode(res.data.token)));
        console.log(jwtDecode(res.data.token));
        console.log("dang nhap ok");
        if(res.data!=null){
          dispatch(login(res.data.user.email));
          dispatch(authenticate());
          axios.get('/session/getMenu')
          .then(res => {
            console.log(res.data);
              dispatch(loadMenu(res.data));
          })
          .catch(err => console.log(err));
        }
        else{

          dispatch(showNotifi(res.data));
        }
      })
      .catch(function(err){
         console.log('loi cmmdadm');
        dispatch(showNotifi(err.response.data.err));
      });

  }


  render(){
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt={notification}/>: null;
    return (
        <div className="row">
         <form onSubmit={this.handleSubmit.bind(this)} className="col-md-4 col-md-offset-3 sign">
           <fieldset>
         <h2 className="page-title">Login</h2>
          <hr className="colorgraph"/>
         <div className="form-group">
               {xhtml}
         </div>

        <hr className="colorgraph"/>
         	<div className="form-group">
          <input className="form-control input-lg" type="text" placeholder="Username" ref="username"/>
          </div>
          <div className="form-group">
            <input className="form-control input-lg" type="password" placeholder="Password" ref="password"/>
         </div>
         <div className="checkbox">
             <label>
               <input type="checkbox" value="" />
               <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
           Remember me
             </label>
         </div>
         <br />


          	<hr className="colorgraph"/>
          <div className="row">
          <div className ="col-xs-6 col-sm-6 col-md-5" >
             <input type="submit" className="btn btn-success btn-block" value="Sign In" />
         </div>
         <div className ="col-xs-6 col-sm-6 col-md-5" >
              <a href="" className="btn btn-link ">Forgot Password?</a>
        </div>

         </div>
         <hr className="colorgraph"/>
           </fieldset>
        </form>
   </div>
    )
  }
}
//  <Captcha />
module.exports = connect(function (state){
  return {veryfiCaptcha: state.veryfiCaptcha,
          notification:state.notification
  };
})(SignIn);
