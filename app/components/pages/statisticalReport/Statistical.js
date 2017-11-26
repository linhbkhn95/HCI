import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';
import ReChart from './components/ReChart.js';
import {NavLink,Route} from 'react-router-dom';
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
             <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">Thống kê báo cáo</div></div>
      
               <div className="panel-body">
                    <div className="browser-work">
                        <div className="col-md-12 row">
                            <div style={{paddingTop:"146px"}} className="col-md-2 row">
                                <ul className="list-group row">
                                            <li className="list-group-item active">Thống kê</li>
                                            <li className="list-group-item"><NavLink to="/statistical/project">Dự án</NavLink></li>
                                            <li className="list-group-item"><NavLink to="/statistical/person">Nhân viên</NavLink></li>
                                            
                                 </ul>
                            </div>
                            <div  className="col-md-10">
                                    {this.props.children}
                                    <Route exact path="/statistical/project" component={ReChart} />
                                    <Route exact path="/statistical/" component={ReChart} />

                                    {/* <ReChart /> */}
                            </div>
                        </div>
                    </div>
                    
                <hr style={{width:"100%"}} />
                {/* <div className="col-md-12"><div className="pull-right"><button style={{marginRight:"10px"}} className="btn btn-primary">Gửi đăng kí</button><button  className="btn btn-defalut">Thoát</button></div>   </div> */}
              </div>
         </div>
         </div>
        )
    }
}

module.exports = RegisterBusiness;