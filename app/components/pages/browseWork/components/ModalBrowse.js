import React from 'react';
import {Modal,Button, FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

class ModalDeleteProduct extends React.Component{
    access(){
      console.log('đồng ý');
      this.props.access();
      let business_id;
   //   let data_respone =this.refs.data_respone.value;
      let userid;
      
       
      
    }
    close(){
        this.props.onHide();
    }
    render(){
      return (
        <Modal 
        show={this.props.show} onHide={this.close.bind(this)} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg"><div style={{    fontSize: "15px",  fontWeight: "700", color: "#765e5e"}} className="title-order">Phê duyệt</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
              <div className="col-md-12 rows">
                    <h5 style={{fontSize:"18px"}} className="col-md-6">Số   tiền cấn chi cho công tác</h5>
                    <div className="col-md-6">
                    <div style={{fontSize:"18px",color:"red"}}  > 5,000,000 Vnđ</div>
                
                    {/* <FormControl componentClass="textarea" rows={2} maxLength={4000} placeholder="Description"/> */}
                     </div>

              </div>
              <div className="col-md-12 rows">
                    <h5 style={{fontSize:"18px"}} className="col-md-6">Ngân sách còn lại</h5>
                    <div className="col-md-6">
                    <div style={{fontSize:"18px",color:"red"}} > 545,000,000 Vnđ</div>

                    {/* <FormControl componentClass="textarea" rows={2} maxLength={4000} placeholder="Description"/> */}
                    </div>

             </div>
            
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.access.bind(this)}>Đồng ý </Button>
            <Button bsStyle="primary" onClick={this.close.bind(this)}>Thoát</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  
  module.exports = ModalDeleteProduct;