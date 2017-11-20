import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class Menu extends React.Component{
  renderListMenuItem(listItem){
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
  render(){
    var style = {
      height:'auto'
    };
      var that = this;
    return (

      <div className=" menu-tree">


      		<div className="sidebar-nav">
        <div role="navigation">

      <div className="navbar-collapse collapse sidebar-navbar-collapse">
            <ul className="nav navbar-nav" >
        {this.props.data.map(function(item,itemindex){


          return(


              <li className="divider ">
                <a href="#" data-toggle="collapse"  data-target={"#"+item.parentId}  className="collapsed">
                <span className=""></span>{item.GroupMenu}<span className="caret pull-right"></span>
                </a>
              <ul className="collapse list-menu-item" style={style}  id={item.parentId} >
                  {that.renderListMenuItem(item.listItem)}
              </ul>
              <span className="arow"></span>
              </li>


            )
        })


        }


        </ul>
        </div>
      </div>
   </div>

</div>
    )
  }
}

module.exports = connect(function (state){
  return {data: state.dataMenu.data,
          username:state.authenticate.username
  };
})(Menu);
