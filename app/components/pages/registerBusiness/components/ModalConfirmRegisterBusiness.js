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
            <Modal.Title id="contained-modal-title-lg"><div style={{    fontSize: "15px",  fontWeight: "700", color: "#765e5e"}} className="title-order">Xác minh</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
              <div className="col-md-12 rows">
                         <div style={{fontSize:"17px"}} className="col-md-12 rows">      
                                  Ban có chắc chắn muốn gủi đăng kí ?
                        </div>

         

          </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.access.bind(this)}>Đồng ý </Button>
            <Button bsStyle="primary" onClick={this.close.bind(this)}>Hủy</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  
  module.exports = ModalDeleteProduct;