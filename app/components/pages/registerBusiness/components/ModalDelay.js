import React from 'react';
import {Modal,Button, FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
var Select = require('react-select');
import 'react-select/dist/react-select.css';
const getOptions = (input) => {
  console.log(input);
  return fetch(`/users/${input}.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { options: json };
    });
}
class ModalDeleteProduct extends React.Component{
    access(){
      console.log('đồng ý');
      this.props.access();
    }
    close(){
        this.props.onHide();
    }
    render(){
      return (
        <Modal 
        show={this.props.show} onHide={this.close.bind(this)} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg"><div style={{    fontSize: "15px",  fontWeight: "700", color: "#765e5e"}} className="title-order">Chỉnh sửa công tác</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
              <div className="col-md-12 rows">
                          <div className="col-md-12 rows">
                          <h5 className="col-xs-4">Dự án đi công tác</h5>
                          <div className="col-xs-2">
                                  <select className="form-control">
                                  <option>Funsurv</option>
                                  <option>VSD</option>
                                  <option>VND</option>
                                  </select>
                          </div>

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

          </div>

          </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.access.bind(this)}>Lưu thay đổi </Button>
            <Button bsStyle="primary" onClick={this.close.bind(this)}>Hủy</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  
  module.exports = ModalDeleteProduct;