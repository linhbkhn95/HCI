import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import axios from 'axios';
import {Route,hashHistory} from 'react-router-dom';
import {loadMenu,resetMenu} from 'actionMenu';
 import {logout} from 'app/action/actionAuthenticate.js';

import {logoutUser} from 'app/action/authActions';
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';

// import history from './history';
class LoginSuccess extends React.Component{
  getDate(){
      var now = new Date();

    //  return now.format("dd/MM/yyyy").toString();
      return new Date().toLocaleDateString();
  }
  logOut(e){
    e.preventDefault();
    var that =this;
    var {dispatch,history} = this.props;
    //logoutUser.bind(this);
    axios.post('/session/logOut')

    .then(res => {
      if(res.data=="ok"){
        console.log('logOut');
       dispatch(logout());
       localStorage.removeItem('jwToken');
      // setAuthorizationToken(false);
      // dispatch(setCurrentUser({}));



        dispatch(resetMenu());
        // that.context.router.history.push('/login');
      }

    })
    .catch(err => console.log(err))
    //hashHistory.push('/account');
  //  console.log(history);
     //window.location = "/account";
  }
  render(){
    var {username} = this.props;
    return (
      <div>
      <div className="label-time">
      hôm nay: {this.getDate()}
       </div>
       <div className="label-username">
       {this.props.username}
        </div>
         <div className="div-logout btn"><a href="#" style={{color:"white"}} className= "" onClick={this.logOut.bind(this)} >Logout</a></div>
      </div>
    )
  }
}
// LoginSuccess.propTypes ={
//    logoutUser: React.PropTypes.func.isRequired
//
// }
module.exports = connect(function (state){
  return {username: state.authenticate.username

   };
})(LoginSuccess);



/*
  axios
  session
*/
