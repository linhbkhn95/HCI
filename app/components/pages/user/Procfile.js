import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';
import ModalDelay from './components/ModalDelay.js'
import ChangPass from './components/ChangePass.js'
import axios from 'axios';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
class RegisterBusiness extends React.Component{
    state = {
      
        showModalDelay:false,
        profile:{
             
        }
      }
     
      access(user){
        console.log('dy');
      
        this.state.profile.phone=user.phone;
        this.state.profile.name = user.name;
        this.setState({showModalDelay:false,profile:this.state.profile});
        toast.info("Thay đổi thông tin thành công !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
    }
    closeModalDelay(){
        this.setState({showModalDelay:false});
    }
    showModalDelay(){
        this.setState({showModalDelay:true});
        console.log('show modaldelay');
     //   this.props.dispatch(removeCart(productId));
     }
     componentDidMount(){
         var {user} =this.props;
         var that=this;
         axios.post('/user/get_profile',{user_id:user.id})
         .then((res)=>{

             that.setState({profile:res.data[0]});
             
         })
     }
      onChange = date => this.setState({ date })
    render(){
        var profile = this.state.profile;
       
        return(
            <div>
            <div className="panel panel-default">
             <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">Thông tin người sử  dụng</div></div>
      
               <div className="panel-body">
                    <div className="browser-work">
                        <div className="col-md-12">
                             <div className="title-profile col-md-12">
                                    <img style={{width:"50px",float:"left"}} src={"../../"+profile.avatar} />
                                     <div style={{float:"left", fontSize:"22px",fontWeight:"bold",paddingLeft:"10px"}}>{profile.name} <div>{"( "+profile.role_name+" )"}</div>

                              </div>
                              <div className="pull-right col-md-1"><button onClick={this.showModalDelay.bind(this)} className="btn btn-default">Chỉnh sửa</button></div>

                       </div>

                        </div>
                        <div  className=" content-procfile col-md-12">
                             <div className="col-md-6">
                                        <div className="title-module">Hoạt động</div>
                                        <div className="col-md-12">
                                          <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Số   đi công tác
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     12
                                                </div>
                                               
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                        Chi phí cao nhât cho lần đi công tác
                                                    </div>
                                                    <div style={{fontWeight:"bold"}} className="col-md-8">
                                                        180,000,000 Vnđ
                                                    </div>
                                                </div>

                                                <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                        Các hoạt động gần đây
                                                    </div>
                                                    
                                                </div>
                                        </div>
                             
                             </div>
                             <div className="col-md-6">
                                        <div className="title-module">Thông tin cá nhân</div>
                                        <div className="col-md-12">
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Tên đầy đủ
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     {profile.name} 
                                                </div>
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Email
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     {profile.email}
                                                </div>
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Sdt
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                    { profile.phone}
                                                </div>
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Chức vụ
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     {profile.role_name}
                                                </div>
                                            </div>
                                        </div>
                             </div>
                        </div>
                    </div>
                    
                <hr style={{width:"100%"}} />
                <ToastContainer
          position="top-left"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
                <ModalDelay  profile={profile} show={this.state.showModalDelay} onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} />
                {/* <ChangPass show="true" onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} /> */}

                {/* <div className="col-md-12"><div className="pull-right"><button style={{marginRight:"10px"}} className="btn btn-primary">Gửi đăng kí</button><button  className="btn btn-defalut">Thoát</button></div>   </div> */}
              </div>
         </div>
         </div>
        )
    }
}

module.exports = connect(function(state){return{
    user:state.auth.user
}})(RegisterBusiness);