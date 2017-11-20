import React from 'react'

module.exports = ({ match  }) => {
    console.log(match);
    return (

    <div className="container panel panel-success" style={{float:"right",width:"99%", padding:"20px",minHeight:"600px"}}>

          {match.params.repoName}

      </div>
  )
}


// export default React.createClass({
//   render() {
//      console.log(this.props);
//     return (
//       <div>
//         <h2>hhh</h2>
//       </div>
//     )
//   }
// })
