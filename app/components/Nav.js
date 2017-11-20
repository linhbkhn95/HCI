import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import LoginSuccess from 'LoginSuccess';
import BtnLogin from 'BtnLogin';
import {connect} from 'react-redux';
class Nav extends React.Component{

  render(){
    console.log(this.props);
    var {isAuthenticated} = this.props;
    var xhtml = isAuthenticated ? <LoginSuccess />:<BtnLogin/>
    return (

    <nav style={{marginBottom:"0px",    background: "-webkit-linear-gradient(left, #342246, #6f178c)"}} className="navbar navbar-inverse navbar-fixed-top">

        <div className="container-fluid">
        <div className="navbar-header" style={{paddingRight:"20px",paddingLeft:"8px"}}>
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar">
           <span className="sr-only">Toggle navigation</span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
         </button>
         <a className="navbar-brand" style={{color:"wheat"}} href="#">Phần mềm quản lý công tác phí</a>
        </div>
        <div id="navbar1" className="navbar-collapse collapse">
         <ul className="nav navbar-nav navbar-right">

            <li>{xhtml}</li>
         </ul>

        </div>
        </div>

      </nav>
    )
  }
}




module.exports = connect(function (state){
  return {isAuthenticated: state.authenticate.isAuthenticated};
})(Nav);
