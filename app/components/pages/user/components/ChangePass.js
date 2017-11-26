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
            <Modal.Title id="contained-modal-title-lg"><div style={{    fontSize: "15px",  fontWeight: "700", color: "#765e5e"}} className="title-order">Thay đổi mật khẩu</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
              <div className="col-md-12 rows">
                    <h5 style={{fontSize:"14px"}} className="col-md-4">Nhập mật khẩu hiện tại</h5>
                    <div className="col-md-8">
                
                        <input className="form-control" type="text" />
                    </div>

          </div>
          <div className="col-md-12 rows">
                    <h5 style={{fontSize:"14px"}} className="col-md-4">Nhập mật khẩu mới</h5>
                    <div className="col-md-8">
                
                        <input className="form-control" type="text" />
                    </div>

          </div>
          <div className="col-md-12 rows">
                    <h5 style={{fontSize:"14px"}} className="col-md-4">Nhập lại mật khẩu mới</h5>
                    <div className="col-md-8">
                
                        <input className="form-control" type="text" />
                    </div>

          </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.access.bind(this)}>Thay đổi  </Button>
            <Button bsStyle="primary" onClick={this.close.bind(this)}>Hủy</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  
  module.exports = ModalDeleteProduct;