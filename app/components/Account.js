import React from 'react';
import {connect} from 'react-redux';
import SignIn from 'SignIn';
import AccountInfo from 'AccountInfo';
import axios from 'axios';
import {loadMenu,resetMenu} from 'actionMenu';
import {showNotifi} from 'actionNotification';
import {login,logout} from 'actionUserName';
class Account extends React.Component{
  // componentDidMount(){
  //
  //    console.log('cmm');
  //     var {dispatch} = this.props;
  //     axios.post('/session/logOut')
  //
  //     .then(res => {
  //         console.log('logOut');
  //       dispatch(logout());
  //
  //       dispatch(resetMenu());
  //
  //     })
  //     .catch(err => console.log(err))
  //     //history.push('/account');
  //
  // }
  render(){
    var {username} = this.props;
    //console.log(this.props.username);
    var xhtml = this.props.isAuthenticated? <AccountInfo/>:<SignIn/>;
    return (
      <div className="small-10 medium-6 large-4 columns small-centered">
        {xhtml}
      </div>
    )
  }
}
module.exports = connect(function (state){
  return {isAuthenticated: state.auth.isAuthenticated};
})(Account);
