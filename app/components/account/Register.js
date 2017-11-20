import React from 'react'
import {NavLink} from 'react-router-dom';
class Login extends React.Component{
	render(){
		return(
				<div className="container">
				<div className="row main">
				<div className="panel-heading">
	               <div className="panel-title text-center">
	               		<h1 className="title-cp">Đăng kí tài khoản</h1>
	               		<hr />
	               	</div>
	            </div> 
				<div className="main-login main-center">
					<form className="form-horizontal" method="post" action="#">
						
						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Tên của ban</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="name" id="name"  placeholder="Nhập tên của ban"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Email của bạn</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Nhập Email của bạn"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Tên đăng nhập</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="username" id="username"  placeholder="Nhập tên đăng nhập"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Mật khẩu</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Nhập mật khẩu"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">Nhập lại mật khẩu</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirm" id="confirm"  placeholder=""/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<button type="button" className="btn btn-primary btn-lg btn-block login-button">Đăng kí</button>
						</div>
						<div className="login-register">
				            <NavLink to="/account/login">Đăng nhập</NavLink>
				         </div>
					</form>
				</div>
			</div>
		</div>

			)
	}
}
module.exports = Login;