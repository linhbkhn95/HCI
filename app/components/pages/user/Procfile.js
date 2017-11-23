import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';
import ModalDelay from './components/ModalDelay.js'
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
        showModalDelay:false
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
      onChange = date => this.setState({ date })
    render(){
        return(
            <div>
            <div className="panel panel-default">
             <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">Thông tin người sử  dụng</div></div>
      
               <div className="panel-body">
                    <div className="browser-work">
                        <div className="col-md-12">
                             <div className="title-profile col-md-12">
                                    <img style={{width:"50px",float:"left"}} src="../../images/avatar.jpg" />
                                     <div style={{float:"left", fontSize:"22px",fontWeight:"bold",paddingLeft:"10px"}}>Trịnh đức Bảo Linh <div>(LTV-HN)</div>

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
                                                     Trịnh đức Bảo Linh 
                                                </div>
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Email
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     trinhducbaolinh@gmail.com
                                                </div>
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Sdt
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     01689952267
                                                </div>
                                            </div>
                                            <div className="col-md-12 content-module">
                                                <div style={{color:"#807b7b"}} className="col-md-4">
                                                    Chức vụ
                                                </div>
                                                <div style={{fontWeight:"bold"}} className="col-md-8">
                                                     LTV-HN
                                                </div>
                                            </div>
                                        </div>
                             </div>
                        </div>
                    </div>
                    
                <hr style={{width:"100%"}} />
                <ModalDelay show={this.state.showModalDelay} onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} />

                {/* <div className="col-md-12"><div className="pull-right"><button style={{marginRight:"10px"}} className="btn btn-primary">Gửi đăng kí</button><button  className="btn btn-defalut">Thoát</button></div>   </div> */}
              </div>
         </div>
         </div>
        )
    }
}

module.exports = RegisterBusiness;