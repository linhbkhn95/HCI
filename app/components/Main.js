import React from 'react';
import Nav from 'Nav';
import Menu from 'Menu';
import MenuNgang from './MenuNgang.js';
import axios from 'axios';
import Notification from 'Notification';
import {connect} from 'react-redux';
import actionMenu from 'actionMenu';
import actionNotification from 'actionNotification';
import actionUserName from 'actionUserName';

io.socket.on('userlogin', function (data) {
  console.log(data);
  console.log('Socket `' + data.id + '` joined the party!');
  alert(data.username+ ' đã đăng nhập thành công');
});
class Main extends React.Component{
  render(){
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt={notification}/>: null;
    return (

      <div className="main">


          <Nav/>
          <div className="menu"><MenuNgang/></div>
          <div className="content-main">{this.props.children}</div>



      </div>
    )
  }
  componentDidMount(){
    var {dispatch,auth} = this.props;
     console.log(auth);
     if(auth.isAuthenticated){

      console.log('getmeu tu server');


            axios.post('/session/getMenu',{role:auth.user.role})
            .then(res => {
              console.log('dataaaaaaaaaaaaaaa');
                dispatch(actionMenu.loadMenu(res.data));
            })
            .catch(err => console.log(err));



      }
    }
}

module.exports = connect(function(state){
  return {notification: state.notification,
          auth:state.auth
         }
})(Main);
