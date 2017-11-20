var Menu = require('Menu');
var Main = require('Main');
var React = require('react');
class Layout extends React.Component{
       render(){
         return(
               <div>
                    <Main />


                      <div className="container" style={{paddingTop:"65px",paddingRight:"0px",paddingLeft:"0px"}}>
                          {this.props.children}
                       </div>

               </div>

         )
     }
}
module.exports = Layout;
// <div className="col-md-3">
//    <Menu />
// </div>
