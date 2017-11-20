import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {loadMenu,resetMenu} from 'actionMenu';
import {logout} from 'actionUserName';
class AccountInfo extends React.Component{
  logOut(e){
    e.preventDefault();
    var {dispatch} = this.props;
    axios.post('/session/logOut')

    .then(res => {
      dispatch(logout());

      dispatch(resetMenu())
          console.log('Logout');
    })
    .catch(err => console.log(err))

  }
  render(){
     console.log(this.props.username);
    return (
      <div className="user-inf">
        <h1>This is Account</h1>
        <p>Username: {this.props.username}</p>
        <a href="#" onClick={this.logOut.bind(this)} className="button">Logout</a>
      </div>
    )
  }
}
module.exports = connect(function (state){
  return {username: state.username};
})(AccountInfo);



/*
  axios
  session
*/
