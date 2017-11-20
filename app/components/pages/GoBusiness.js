import React from 'react'
import {NavLink} from 'react-router-dom';
class Login extends React.Component{
	render(){
		return(
			<div className="container">
		        <div className="row">
		        	<div className="col-md-12">
		        		<div class="panel-body">
			    		<form role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
			    				<input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"/>
			    			</div>

			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password"/>
			    					</div>
			    				</div>
			    			</div>
			    			
			    			<input type="submit" value="Register" className="btn btn-info btn-block"/>
			    		
			    		</form>
			    	</div>
		            </div>
		         </div>
   			 </div>
			)
	}
}
module.exports = Login;