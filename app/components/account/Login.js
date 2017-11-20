import React from 'react'
import {NavLink} from 'react-router-dom';
class Login extends React.Component{
	render(){
		return(
			<div className="container">
		        <div className="card card-container">
		            
		            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
		            <p id="profile-name" className="profile-name-card"></p>
		            <form className="form-signin">
		                <span id="reauth-email" className="reauth-email"></span>
		                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
		                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
		                <div id="remember" className="checkbox">
		                    <label>
		                        <input type="checkbox" value="remember-me" /> Nhớ mật khẩu
		                    </label>
		                </div>
		                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng nhập</button>
		            </form>
		            <NavLink to="/account/forgot-password" className="forgot-password">
		               Quên mật khẩu?
		            </NavLink>
		            <div className="pull-right">
		            	 <NavLink to="/account/register" className="forgot-password">
		                  Đăng kí tài khoản
		            </NavLink>
		            </div>
		        </div>
   			 </div>
			)
	}
}
module.exports = Login;