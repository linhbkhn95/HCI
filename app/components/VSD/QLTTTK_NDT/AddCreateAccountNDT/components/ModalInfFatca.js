import React from 'react';
import {Popover,OverlayTrigger,Tooltip,Button,Modal} from 'react-bootstrap'
import FormModal from 'FormModal';
import TableMoney from 'TableMoney';
import RowItemMoney from 'RowItemMoney';
import {connect} from 'react-redux';
import {closeModal} from 'actionCloseAccount';

var ModalInfFatca = React.createClass({

   close(){
      var {dispatch} =this.props;
       dispatch(closeModal());
   },
   access(){
      var {dispatch} =this.props;
       dispatch(closeModal());
   },
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    console.log(this.props.showModal);
    return (
      <div className="popup-form">


         <Modal show={this.props.showModal} onHide={this.close}>
          <div>
          <Modal.Header closeButton>
            <Modal.Title><div className="title-popup">Đề nghị tất toán tài khoản</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <hr />




          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.access}>Chấp nhận</Button>
            <Button onClick={this.close}>Thoát</Button>
          </Modal.Footer>
          </div>
        </Modal>

      </div>
    );
  }
});
module.exports = connect(function(state){
  return {

  };
})(ModalInfFatca)
