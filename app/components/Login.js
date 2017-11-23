import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Captcha from 'Captcha';
import Notification from 'Notification';
import {loadMenu,resetMenu} from 'actionMenu';
import {showNotifi} from 'actionNotification';
import flow from 'lodash.flow';
import {changeLanguage} from 'app/action/actionLanguage.js';
import {login,logout} from 'app/action/actionAuthenticate.js';
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import {setCurrentUser} from 'app/action/authActions.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import translate from 'app/utils/i18n/Translate.js';
import TableBootstrap from 'app/utils/TableBootstrap.js';
import ReactTableBootstrap from 'app/utils/ReactTableBootstrap.js';
//import Inputvalidate from 'app/utils/Inputvalidate.js';
import PropTypes from 'prop-types';
import MutiLanguage from './MutiLanguage.js';
class Login extends React.Component{

  componentDidMount(){
    var {dispatch} = this.props;
    var that=this;
     if(!localStorage.jwToken){
         axios.get('auth/loginFlex')
         .then((res)=>{
              localStorage.setItem('jwToken',res.data.token);
              console.log('đăng nhập qua flex thành công');
              dispatch(login(jwtDecode(res.data.token).username));

               axios.get('/session/getMenu')
               .then(res => {
                 console.log(res.data);
                dispatch(loadMenu(res.data));
                   that.props.history.push('/');
              })
              .catch(function(err){console.log(err)})
      })

      .catch(function(err){
            console.log('loi');
            dispatch(showNotifi(err.response.data.err));

            //dispatch(showNotifi(err.response.));
         });

     }

  }


  handleSubmit(e){
    e.preventDefault();


    var {dispatch} = this.props;
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
        dispatch(showNotifi(""));
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

  selectChangeHandler(event,key){
     var {dispatch} = this.props;
     console.log(event.target.value);

    dispatch(changeLanguage(event.target.value));
  }
  render(){


    return (




  <div className="col-md-9">
          <ReactTableBootstrap />
         <div className="col-xs-7 col-xs-push-4 div-pagesize" style={{ paddingBottom:"17px"}}>

                  <label className="col-xs-4  pagesize" >{this.props.strings.choselanguage}</label>
                   <div className="col-xs-4">
                      <select onChange={this.selectChangeHandler.bind(this)} ref="pagesize" className="form-control">
                        <option value="en">Anh</option>
                        <option value="vie">Việt Nam</option>
                        <option value="fr">Pháp</option>
                        <option value="zhcn">Trung quốc</option>
                        <option value="ru">Nga</option>

                      </select>
                    </div>

              </div>


      <div className="omb_login">

  		<div className="row omb_row-sm-offset-3 omb_socialButtons">
      	    <div className="col-xs-2 col-sm-3">
  		        <a href="#" className="btn  btn-block omb_btn-facebook">
  			        <i className="fa fa-facebook visible-xs"></i>
  			        <span className="hidden-xs">Facebook</span>
  		        </a>
  	        </div>
          	<div className="col-xs-4 col-sm-2">
  		        <a href="auth/flex"  className="btn  btn-block omb_btn-flex">
  			        <i className="fa fa-twitter visible-xs"></i>
  			        <span className="hidden-xs">Flex</span>
  		        </a>
  	        </div>
          	<div className="col-xs-4 col-sm-2">
  		        <a href="#" className="btn  btn-block omb_btn-google">
  			        <i className="fa fa-google-plus visible-xs"></i>
  			        <span className="hidden-xs">Google+</span>
  		        </a>
  	        </div>
  		</div>

  		<div className="row omb_row-sm-offset-3 col-md-offset-1 omb_loginOr">
  			<div className="col-xs-12 col-sm-6">
  				<hr className="omb_hrOr"/>
  				<span className="omb_spanOr">{this.props.strings.or}</span>
  			</div>
  		</div>

  		<div className="row omb_row-sm-offset-3">
  			<div className="col-xs-12 col-sm-7">
  			    <form className="omb_loginForm" onSubmit={this.handleSubmit.bind(this)} >
  					<div className="input-group">
  						<span className="input-group-addon"><i className="fa fa-user"></i></span>
  						<input type="text" ref="username" className="form-control" name="username" placeholder="email address"/>
  					</div>
  					<span className="help-block"></span>

  					<div className="input-group">
  						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
  						<input  type="password" ref="password" className="form-control" name="password" placeholder="Password"/>
  					</div>
                      <span className="help-block">{this.props.notification}</span>
                      <div className="row omb_row-sm-offset-3">
                   			<div className="col-xs-12 col-sm-4 col-xs-pull-2">
                   				<label className="checkbox">
                   					<input type="checkbox" value="remember-me"/>{this.props.strings.remember}
                   				</label>
                   			</div>
                   			<div className="col-xs-12 col-sm-5">
                   				<p className="omb_forgotPwd">
                   					<a href="#">{this.props.strings.forgotPass}</a>
                   				</p>
                   			</div>
                   		</div>
  					<button style={{padding:'4px 10px 4px 10px',fontSize:'12px'}} className="btn  btn-success " type="submit">{this.props.strings.login}</button>
  				</form>
  			</div>
      	</div>

  	</div>

          <Inputvalidate />

          </div>


    )
  }
}


Login.propTypes = {

  strings: PropTypes.object
};

Login.defaultProps = {

   strings:{
     choselanguage:' Chose language',
     login:'Login',
     remember:'Remember Me',
     forgotPass:'Forgot password ?'
  },


};
const stateToProps = state => ({
          veryfiCaptcha: state.veryfiCaptcha,
          notification:state.notification
});


const decorators = flow([
  connect(stateToProps),
  translate('Login')
]);

module.exports = decorators(Login);

// module.exports = connect(function (state){
//   return {veryfiCaptcha: state.veryfiCaptcha,
//           notification:state.notification
//   };
// })(Login);
  // <div className="col-md-12"><MutiLanguage /></div>
