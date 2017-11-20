import Recaptcha from 'react-captcha';
import React from 'react';
import {connect} from 'react-redux';
// create a variable to store the component instance
// var Gcaptcha = require('react-gcaptcha');
// var Recaptcha = require('react-recaptcha');
class Captcha extends React.Component{

  getCaptchaResponse(value){
    console.log(value);
    var {dispatch} = this.props;
    dispatch({type: 'Success'});
  }
  onScriptError(){
    console.log('sss');
  }
 render(){

   return(
      <div >

      <Recaptcha
          sitekey = '6LfA1ycUAAAAAOEd2N7dzYtvMz79xaPtE-yAQDDG'
          lang = 'en'
          theme = 'dark'
          type = 'image'
          onScriptError ={this.onScriptError}
          callback = {this.getCaptchaResponse.bind(this)}/>


      </div>
    )
  }

}


module.exports =connect()(Captcha);
