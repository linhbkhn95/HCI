import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';
import ModalDelay from './ModalDelay.js'
import ChangPass from './ChangePass.js'
import {connect} from 'react-redux';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const getOptions = (input) => {
    console.log(input);
    return fetch(`/users/${input}.json`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        return { options: json };
      });
  }
class RegisterBusiness extends React.Component{
    state = {
        date: new Date(),
        showModalDelay:false,
        textError:'',
        pass:'',
        newpass:'',
        renewpass:''
      }
     
      access(){
        console.log('dy');
      
          
        this.setState({showModalDelay:false});
    }
    closeModalDelay(){
        this.setState({showModalDelay:false});
    }
    showModalDelay(){
        this.setState({showModalDelay:true});
        console.log('show modaldelay');
     //   this.props.dispatch(removeCart(productId));
     }
     changePass(){
         let {pass,newpass,renewpass} =this.refs;
         var that =this;
         if(pass.value.trim()&&newpass.value.trim()&&renewpass.value.trim()){
             if(newpass.value.trim()==renewpass.value.trim()){
                 axios.post('/user/changepass',{user_id:1,password:pass.value.trim(),newpass:newpass.value.trim()})
                 .then((res)=>{
                     console.log(res.data);
                     toast.info("Thay đổi mật khẩu thành công !", {
                        position: toast.POSITION.BOTTOM_CENTER
                      });
                      that.setState({textError:''})
                      pass.value='';
                      newpass.value='';
                      renewpass.value='';
                      
                 })
                 .catch((err)=>{
                     console.log(err);
                     that.setState({textError:'Mật khẩu không chính xác'})
                 })
             }
             else{that.setState({textError:'Mật khẩu mới không trùng nhau'})}
         }
         else{that.setState({textError:'Mật khẩu không được để trống'})}
     }
      onChange = date => this.setState({ date })
    render(){
        return(
            <div>
            <div className="panel panel-default">
             <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">Thay đổi mật khẩu</div></div>
      
               <div className="panel-body">
                    <div className="browser-work">
                        
                    <div className="col-md-12 rows">
                    <h5 style={{fontSize:"14px"}} className="col-md-4">Nhập mật khẩu hiện tại</h5>
                    <div className="col-md-4">
                
                        <input ref="pass" defaultValue={this.state.pass} className="form-control" type="password" />
                    </div>

          </div>
          <div className="col-md-12 rows">
                    <h5 style={{fontSize:"14px"}} className="col-md-4">Nhập mật khẩu mới</h5>
                    <div className="col-md-4">
                
                        <input ref="newpass" defaultValue={this.state.newpass} className="form-control" type="password" />
                    </div>

          </div>
          <div className="col-md-12 rows">
                    <h5 style={{fontSize:"14px"}} className="col-md-4">Nhập lại mật khẩu mới</h5>
                    <div className="col-md-4">
                
                        <input ref ="renewpass" defaultValue={this.state.renewpass} className="form-control" type="password" />
                    </div>

          </div>
          <div className="col-md-12 rows">
          <div className="input-group">
                                            <div style={{color:"red",padding:"4px",marginTop:"-14px"}} className="">{this.state.textError}</div>
                       </div>
                    </div>
                    </div>
                  
                <hr style={{width:"100%"}} />
                <div className="col-md-12"><div className="pull-right"><button onClick={this.changePass.bind(this)} style={{marginRight:"10px"}} className="btn btn-primary">Thay đổi</button><button  className="btn btn-default">Thoát</button></div>   </div>
                <ModalDelay show={this.state.showModalDelay} onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} />
                {/* <ChangPass show="true" onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} /> */}
                <ToastContainer
          position="top-left"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
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