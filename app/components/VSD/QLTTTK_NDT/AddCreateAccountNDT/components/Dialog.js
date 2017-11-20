import React from 'react';
import {Button,Modal} from 'react-bootstrap'

var Dialog= React.createClass({
   render(){
      return(
          <div>
          <Modal show={this.props.showDiaLog} onHide={this.props.close}>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Bạn có chắc chắn muốn xóa Người ủy quyền có CMTND : <strong> {this.props.cmtnd} </strong> ?
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.props.close}>Hủy</Button>
              <Button onClick={this.props.delete} bsStyle="primary">Xóa</Button>
            </Modal.Footer>

          </Modal>
        </div>
      )
    }
})
module.exports=Dialog;
