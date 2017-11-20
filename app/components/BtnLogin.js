import React from 'react';
import {Link} from 'react-router-dom';
class BtnLogin extends React.Component{

  render(){

    return (
            <button className="btn btn-success navbar-btn"><Link to="/account" style={{ color: "white",textDecoration: "none"}}   >Login</Link></button>
    )
  }
}
module.exports =BtnLogin;



/*
  axios
  session
*/
