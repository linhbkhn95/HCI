import React from 'react';

var Select = require('react-select');
import 'react-select/dist/react-select.css';
import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker';
import {FormControl} from 'react-bootstrap';

class RegisterBusiness extends React.Component{
    state = {
        date: new Date(),
        showModalDelay:false,
        file: '',imagePreviewUrl: ''
      }
     
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
      
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    
      onChange = date => this.setState({ date })
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    
        return(
            <div>
            <div className="panel panel-default">
             <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">Xin thêm chi phí cho đợt công tác</div></div>
      
               <div className="panel-body">
                    <div className="browser-work">
                        <div className="col-md-12">
                             <div className="upload">
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
                                    <div className="col-md-12 rows">
                                            <h5 className="col-md-4">Lý do xin thêm chi phí</h5>
                                            <div className="col-md-6">
                                        
                                            {/* <FormControl componentClass="textarea" rows={2} maxLength={4000} placeholder="Description"/> */}
                                            <textarea className="form-control" rows="3" ></textarea>
                                            </div>

                                    </div>
                                    <div className="col-md-12 rows">
                                            <h5 className="col-md-4">Chi phí xin thêm</h5>
                                            <div className="col-md-4">
                                        
                                            
                                            <input className="form-control" type="text" pattern="[0-9]*" mode="number" />
                                            </div>

                                        </div>
                             </div>
                             <hr style={{width:"100%"}} />
                            <div className="col-md-12"><div className="pull-right"><button style={{marginRight:"10px"}} className="btn btn-primary">Gửr đề nghị</button><button  className="btn btn-defalut">Thoát</button></div>   </div>
                        </div>
                        </div>
                    </div>
                    
                <hr style={{width:"100%"}} />

                {/* <div className="col-md-12"><div className="pull-right"><button style={{marginRight:"10px"}} className="btn btn-primary">Gửi đăng kí</button><button  className="btn btn-defalut">Thoát</button></div>   </div> */}
              </div>
         </div>
        
        )
    }
}

module.exports = RegisterBusiness;