import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class MenuNgang extends React.Component{
  renderListMenuItem(listItem){
    console.log(listItem);
   if (listItem==="undefind"||listItem.length===0) {

      return null;


    } else {
        return(
          listItem.map(function(i,index){

          return(
            <li><NavLink  key={index} to={i.link}>{i.NameMemu} </NavLink></li>
            )
          })

    )
  }
}
renderMenuGroup(item){
  console.log(item);
   if(item.link===null){
     return(
       <a href="#" data-toggle="collapse"  data-target={"#"+item.parentId}  className="collapsed">
       <span className=""></span>{item.GroupMenu}<span className="caret pull-right"></span></a>
     );
   }
   else{
     return(
       <a href="#" data-toggle="collapse"  data-target={"#"+item.parentId}  className="collapsed">
       <span className=""></span><NavLink to={item.link}>{item.GroupMenu}</NavLink><span className="caret pull-right"></span>
       </a>
     )
   }
}
  render(){
    var style = {
      height:'auto'
    };
      var that = this;
      return (

      <div className=" navbar-default container">


        <div className="navbar-header" style={{paddingRight:"0px"}}>
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-controls="navbarMenu">
           <span className="sr-only">Toggle navigation</span>
           <span className="icon-bar top-bar"></span>
 					 <span className="icon-bar middle-bar"></span>
 					 <span className="icon-bar bottom-bar"></span>
         </button>

        </div>



         <div id="navbarMenu" className="navbar-collapse collapse">
            <ul className="nav navbar-nav" >
              {this.props.data.map(function(item,itemindex){


                return(


                  <li className="dropdown">
                        {/* {that.renderMenuGroup(item)} */}
                       <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{item.GroupMenu} <span className="glyphicon "></span><span className="caret"></span></a>
                       <ul className="dropdown-menu custom-ul-li-ul " role="menu">
                           {that.renderListMenuItem(item.listItem)}
                       </ul>
                  </li>



                  )
                })


              }


              </ul>

              </div>
              </div>


    )
  }
}

module.exports = connect(function (state){
  return {data: state.dataMenu.data,
          username:state.authenticate.username
  };
})(MenuNgang);
