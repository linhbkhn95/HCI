import React from 'react';
import {Modal,Button, FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

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
            <Modal.Title id="contained-modal-title-lg"><div style={{    fontSize: "15px",  fontWeight: "700", color: "#765e5e"}} className="title-order">Chỉnh sửa thông tin cá nhân</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
              <div className="col-md-12 rows">
              <div className="col-md-12">
              <div className="col-md-12 content-module">
                  <div style={{color:"#807b7b"}} className="col-md-4">
                      Tên đầy đủ
                  </div>
                  <div style={{fontWeight:"bold"}} className="col-md-8">
                       <input className="form-control" type="text" defaultValue="Trịnh đức Bảo Linh" /> 
                  </div>
              </div>
              <div className="col-md-12 content-module">
                  <div style={{color:"#807b7b"}} className="col-md-4">
                      Email
                  </div>
                  <div style={{fontWeight:"bold"}} className="col-md-8">
                  <input className="form-control" type="text" defaultValue="trinhducbaolinh@gmail.com" /> 
                  </div>
              </div>
              <div className="col-md-12 content-module">
                  <div style={{color:"#807b7b"}} className="col-md-4">
                      Sdt
                  </div>
                  <div style={{fontWeight:"bold"}} className="col-md-8">
                  <input className="form-control"  type="text" defaultValue="01689952267" /> 

                  </div>
              </div>
              <div className="col-md-12 content-module">
                  <div style={{color:"#807b7b"}} className="col-md-4">
                      Chức vụ
                  </div>
                  <div style={{fontWeight:"bold"}} className="col-md-8">
                  <input className="form-control" type="text" defaultValue="LTV-HN" /> 
                  </div>
              </div>
          </div>

          </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.access.bind(this)}>Lưu thay đổi</Button>
            <Button bsStyle="primary" onClick={this.close.bind(this)}>Hủy</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  
  module.exports = ModalDeleteProduct;