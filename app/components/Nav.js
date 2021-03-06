import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import LoginSuccess from 'LoginSuccess';
import BtnLogin from 'BtnLogin';
import {connect} from 'react-redux';
import moment from 'moment';
import ReactTooltip from 'react-tooltip'
var date = Date.now();
var datedemo=1511399642970;
class Nav extends React.Component{
  logout(){
    
       console.log("logout");
   
   

        
        var {dispatch,history} = this.props;
        //logoutUser.bind(this);
        // axios.post('/session/logOut')

        // .then(res => {
        //   if(res.data=="ok"){
        //     console.log('logOut');
      //    dispatch(logout());
          localStorage.removeItem('jwToken');
          // dispatch(logout());
          // setAuthorizationToken(false);
          // dispatch(setCurrentUser({}));
          this.context.router.push('/account/login');


         //   dispatch(resetMenu());
            // that.context.router.history.push('/login');
        //   }

        // })
        // .catch(err => console.log(err))
  }
  render(){
    console.log(this.props);
    var {isAuthenticated} = this.props;
    var xhtml = isAuthenticated ? <LoginSuccess />:<BtnLogin/>
    var html = isAuthenticated?  <li id="notification_li">
    <span id="notification_count">3</span>
    <a href="#" ref="foo" id="notificationLink" data-tip="Thông báo"><i style={{fontSize:"19px",color:"#4579b8"}} className="glyphicon glyphicon-globe" ></i> </a>

    <div id="notificationContainer">
          <div className="beeperNub"></div>
        <div id="notificationTitle" >Thông báo</div>
        <div className="">Mới</div>
        <div id="notificationsBody" className="notifications">
          
            <div className="col-md-12 alert-message">
                <div className="col-md-3 row"><img className="avatar-alert" src="/images/avatar.jpg" /></div>
                <div className=" row">
                      <strong>Nhỏ Ngọc</strong> đã phê duyệt công tác dự án <strong>Funsurv</strong>
                      <br />
                      <p className="time-alert">{moment(datedemo).lang('vi').fromNow()}</p>
                </div>
            </div>
            <div className="col-md-12 alert-message">
                <div className="col-md-3 row"><img className="avatar-alert" src="/images/avatar.jpg" /></div>
                <div className=" row">
                      <strong>Phương Anh</strong> dã ảnh hóa đơn cho công tác của dự án <strong>Funsurv</strong>
                      <br />
                      <p className="time-alert">{moment(datedemo).lang('vi').fromNow()}</p>
                </div>
            </div>
            <div className="col-md-12 alert-message">
                <div className="col-md-3 row"><img className="avatar-alert" src="/images/avatar.jpg" /></div>
                <div className=" row">
                      <strong>Linh Trịnh</strong> đã yêu cầu phê duyệt công tác dự án <strong>Funsurv</strong>
                      <br />
                      <p className="time-alert">{moment(datedemo).lang('vi').fromNow()}</p>
                </div>
            </div>
        
        </div>
        <div id="notificationFooter"><a href="#">Xem tất cả</a></div>
    </div>

</li>:null;
  var profile = isAuthenticated ?    <li className="dropdown">
  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.user.username}<span className="caret"></span></a>
  <ul className="dropdown-menu">
    <li><Link to="/users/procfile">Thông tin người dùng</Link></li>
    <li><Link to="/account/changePass">Thay đổi mật khẩu</Link></li>
    <li><Link onClick={this.logout.bind(this)} to="">Đăng xuất</Link></li>
  
  </ul>
</li> :null ;

  
//background: "-webkit-linear-gradient(left, #342246, #6f178c)"}
    return (
    
    <nav style={{marginBottom:"0px"}} className="navbar navbar-default navbar-fixed-top">
         <ReactTooltip />
        <div className="container-fluid">
        <div className="navbar-header" style={{paddingRight:"20px",paddingLeft:"8px"}}>
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar">
           <span className="sr-only">Toggle navigation</span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
         </button>
         <a className="navbar-brand title-project" style={{color:""}} href="#">Phần mềm quản lý công tác phí</a>
        </div>
        {/* <div className="menu-left"> */}
        <div id="navbar1" className="navbar-collapse  collapse">
         <ul className="nav navbar-nav navbar-right">
             {html}
            {/* <li><NavLink to="/shopCart"><i style={{fontSize:"19px",color:"#4579b8"}} className="glyphicon glyphicon-globe" ></i> <div style={{fontSize:"14px",float:"right",paddingLeft:"2px" ,marginTop:"2px"}}>Thông báo</div></NavLink> <span className="badge">{this.props.count}</span></li> */}
            {/* <li className="active"><a href="#">Trang chủ <span className="sr-only">(current)</span></a></li> */}
              {profile}
           
           
         
         </ul>

        </div>
        {/* </div> */}
        </div>

      </nav>
    )
  }
}




module.exports = connect(function (state){
  return {isAuthenticated: state.auth.isAuthenticated,user:state.auth.user};
})(Nav);
