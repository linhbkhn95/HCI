import React from 'react';

class Transaction extends React.Component{
  componentDidMount(){
    var {user} = this.props;
    axios.get('auth/authRole',user)
    .then(function(res){
       if(res.data){

       }
    })
  }
  render(){
    return (
      <div className="small-8 columns small-centered">
        <h1>Trang của Admin</h1>
        <br/>
      </div>
    )
  }
}

module.exports = Transaction;
