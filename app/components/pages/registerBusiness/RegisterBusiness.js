import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';
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
      }
     
      onChange = date => this.setState({ date })
    render(){
        return(
            <div>
            <div className="panel panel-default">
             <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">ĐĂNG KÍ ĐI CÔNG TÁC</div></div>
      
               <div className="panel-body">
                    <div className="register-business">
                        <div className="col-md-12 rows">
                            <h5 className="col-xs-4">Dự án đi công tác</h5>
                            <div className="col-xs-2">
                                    <select className="form-control">
                                    <option>Funsurv</option>
                                    <option>VSD</option>
                                    <option>VND</option>
                                    </select>
                            </div>

                        </div>
                        {/* <div className="col-md-12 rows">
                            <h5 className="col-xs-4">Thêm người đi công tác</h5>
                            <div className="col-xs-2">
                                    <select className="form-control">
                                    <option>Funsurv</option>
                                    <option>VSD</option>
                                    <option>VND</option>
                                    </select>
                            </div>

                        </div> */}
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Danh sách người đi công tác</h5>
                            <div className="col-md-6">
                            <Select.Async
                                name="form-field-name"
                                value="one"
                                loadOptions={getOptions}
                                />
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Mục đích đi công tác</h5>
                            <div className="col-md-6">
                        
                            {/* <FormControl componentClass="textarea" rows={2} maxLength={4000} placeholder="Description"/> */}
                              <textarea className="form-control" rows="3" ></textarea>
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Thời gian bắt đầu đi</h5>
                            <div className="col-md-4">
                        
     
                                                <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                            />
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Thời gian kết thúc dự kiến</h5>
                            <div className="col-md-4">
                        
     
                            <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                            />
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Địa điểm đi</h5>
                            <div className="col-md-4">
                        
     
                              <input type="text" />

                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Khu vực đi</h5>
                            <div className="col-md-8">
                        
                                <label className="checkbox-inline">
                                <input type="checkbox" value=""/>Trong  nuóc 
                              </label>
                              <label className="checkbox-inline">
                                <input type="checkbox" value=""/>Ngoài  nuóc 
                              </label>
                             
                              
                              
                            </div>

                        </div>

                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Chi phí</h5>
                            <div className="col-md-4">
                        
     
                            <label className="checkbox-inline">
                                <input type="checkbox" value=""/>Ăn
                              </label>
                              <label className="checkbox-inline">
                                <input type="checkbox" value=""/>Ở 
                              </label>
                              <label className="checkbox-inline">
                                <input type="checkbox" value=""/>Đi lại
                              </label>
                             
                             
                             

                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Chi phí phát sinh</h5>
                            <div className="col-md-8">
                        
                             
                              <div className="col-md-4"> <input type="number" mode="number" /></div>
                              <div className="col-md-8"> <div className="col-md-4">Ghi chú</div><div className="col-md-8"><input className="form-control" type="text" mode="number" /></div></div>
                            </div>

                        </div>
                    </div>
                    
                <hr style={{width:"100%"}} />
                <div className="col-md-12"><div className="pull-right"><button style={{marginRight:"10px"}} className="btn btn-primary">Gửi đăng kí</button><button  className="btn btn-defalut">Thoát</button></div>   </div>
              </div>
         </div>
         </div>
        )
    }
}

module.exports = RegisterBusiness;