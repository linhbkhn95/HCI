import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';
import axios from 'axios';
import ModalConfirm from './components/ModalConfirmRegisterBusiness.js';
var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', clearableValue: false }
  ];
const getOptions = (input) => {
    console.log(input);
    // return fetch(`/user/search_all?key=${input}`)
    //   .then((response) => {
    //     return response.json();
    //   }).then((json) => {
    //     return { options: json };
    //   });
    return axios.post('/user/search_all',{key:input})
    .then((res)=>{
        console.log(res.data);
     
        return {options:res.data}
    })
  }
//const getOptions = (input, callback) => {
//     setTimeout(() => {
//       callback(null, {
//         options: [
//           { value: 'one', label: 'One' },
//           { value: 'two', label: 'Two' }
//         ]
//         // CAREFUL! Only set this to true when there are no more options,
//         // or more specific queries will not be sent to the server.
//         // complete: true
//       });
//     }, 500);
//   };
class RegisterBusiness extends React.Component{
    state = {
        date_start: new Date(),
        date_finish : new Date(),
        selected_value: "one",
        tags: [],
        async_test: [],
        listproject:[],
        showModalDelay:false
      }
  
 componentDidMount(){
     var that=this;
     axios.get('/project/get_all')
     .then((res)=>{
          that.setState({listproject:res.data});
     })
 }
 access(){
    console.log('dy');
  
    this.registerBusiness();
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
  onChangeStart = date_start => this.setState({ date_start })
  onChangeFinish = date_finish=> this.setState({ date_finish })
  
   getOptions = (input) => {
        console.log(input);
       
        return axios.post('/user/search_all',{key:input})
        .then((res)=>{
            console.log(res.data);
         
            return {options:res.data}
        })
      }
    registerBusiness(){
        var data={};
         data.project_id = this.refs.project_id.value;
         data.list_person = this.state.tags;
         data.user_id = 1;
         data.address= this.refs.address.value;
         data.target = this.refs.target.value;
         data.date_start = this.state.date_start;
         data.date_finish = this.state.date_finish;
         data.area = this.refs.area.value;
         data.cost="192,000,000"
        axios.post('/business/register',data)
        .then((res)=>{
            console.log(res.data);
        })
    }
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
                                    <select ref="project_id" className="form-control">
                                     {this.state.listproject.map((project,index)=>{
                                        return(
                                            <option value={project.id} key={index}>{project.name}</option>
                                        )
                                     })}
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
                                multi={true}
                                loadOptions={getOptions}
                                value={this.state.tags}
                                onChange={e => this.setState({tags: e})}
                                
                                />
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Mục đích đi công tác</h5>
                            <div className="col-md-6">
                        
                            {/* <FormControl componentClass="textarea" rows={2} maxLength={4000} placeholder="Description"/> */}
                              <textarea ref="target" className="form-control" rows="3" ></textarea>
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Thời gian bắt đầu đi</h5>
                            <div className="col-md-4">
                        
     
                                                <DatePicker
                            onChange={this.onChangeStart}
                            value={this.state.date_start}
                            />
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Thời gian kết thúc dự kiến</h5>
                            <div className="col-md-4">
                        
     
                            <DatePicker
                            onChange={this.onChangeFinish}
                            value={this.state.date_finish}
                            />
                            </div>

                        </div>
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Địa điểm đi</h5>
                            <div className="col-md-4">
                        
     
                              <input ref="address" className="form-control" type="text" />

                            </div>

                        </div>
                        <div className="col-md-12 rows">
                       
                                <h5 className="col-xs-4">Khu vực đi công tác</h5>
                                <div className="col-xs-2">
                                        <select ref="area" className="form-control">
                                        
                                                <option value="1">Trong nước</option>
                                                <option value="2">Ngoài nước</option>
                                        
                                        </select>
                                </div>

                        

                        </div>

                        {/* <div className="col-md-12 rows">
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

                        </div> */}
                        <div className="col-md-12 rows">
                            <h5 className="col-md-4">Chi phí phát sinh</h5>
                            <div className="col-md-8">
                        
                             
                              <div className="col-md-4 row"> <input className="form-control" type="number" mode="number" /></div>
                              <div className="col-md-8"> <div className="col-md-4">Ghi chú</div><div className="col-md-8"><input className="form-control" type="text" mode="number" /></div></div>
                            </div>

                        </div>
                    </div>
                    
                <hr style={{width:"100%"}} />
                <div className="col-md-12"><div className="pull-right"><button onClick={this.showModalDelay.bind(this)} style={{marginRight:"10px"}} className="btn btn-primary">Gửi đăng kí</button><button  className="btn btn-default">Thoát</button></div>   </div>
              </div>
         </div>
         <ModalConfirm show={this.state.showModalDelay} onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} />
         </div>
        )
    }
}

module.exports = RegisterBusiness;