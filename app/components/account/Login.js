import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			textError:''

		}
	}
	login(e){
        var {dispatch} = this.props;

       e.preventDefault();

      var that =this;
       var {dispatch} = this.props;
       var {email, password} = this.refs;
      
   //  io.socket.get('/session/userlogin',{u:username.value}, function gotResponse(data, jwRes) {
   //     console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
   //   });
      axios.post('/auth/index', {email: email.value,password: password.value})
       .then(res => {
         
    //  console.log(res.data);
         localStorage.setItem('jwToken',res.data.token);
         setAuthorizationToken(res.data.token);
         dispatch(setCurrentUser(jwtDecode(res.data.token)));
       //  dispatch(showNotifi(""));
         console.log(jwtDecode(res.data.token));
         console.log("dang nhap ok");
     //    console.log(that.refs.phone.getVal+' ' +that.refs.password.getValue());
      //   dispatch(login(that.refs.phone.value));
         that.props.history.push('/');
     //   if(res.data!=null){

        //  dispatch(login(res.data.user.email));
        //  dispatch(authenticate());
     //     axios.get('/session/getMenu')
     //     .then(res => {
     //       console.log(res.data);
     //         dispatch(loadMenu(res.data));
     //     })
     //     .catch(err => console.log(err));
     //   }
     //   else{

     //   //  dispatch(showNotifi(res.data));
     //   }
      })
     .catch(function(err){
        that.setState({textError:err.response.data.err});
        
     //  dispatch(showNotifi(err.response.data.err));
     });
      
   }
	render(){
		return(
			<div className="container">
		        <div className="card card-container">
		            
		            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
		            <p id="profile-name" className="profile-name-card"></p>
		            <form className="form-signin">
		                <span id="reauth-email" className="reauth-email"></span>
		                <input type="email" id="inputEmail" ref="email" className="form-control" placeholder="Nhập email .." required autofocus />
		                <input type="password" id="inputPassword" ref="password" className="form-control" placeholder="Nhập password" required />

						<div className="input-group">
                                            <div style={{color:"red",padding:"4px",marginTop:"-14px"}} className="">{this.state.textError}</div>
                       </div>
		                <div id="remember" className="checkbox">
		                    <label>
		                        <input type="checkbox" value="remember-me" /> Nhớ mật khẩu
		                    </label>
		                </div>
		                <button onClick={this.login.bind(this)} className="btn btn-lg btn-primary btn-block btn-signin" >Đăng nhập</button>
		            </form>
		            <NavLink to="/account/forgot-password" className="forgot-password">
		               Quên mật khẩu?
		            </NavLink>
		            {/* <div className="pull-right">
		            	 <NavLink to="/account/register" className="forgot-password">
		                  Đăng kí tài khoản
		            </NavLink> */}
		            {/* </div> */}
		        </div>
   			 </div>
			)
	}
}
module.exports = connect(function(state){
	return{}
}
	)	(Login);