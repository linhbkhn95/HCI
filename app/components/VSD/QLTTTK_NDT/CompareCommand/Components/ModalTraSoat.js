import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap'
import FormModalTraSoat from './FormModalTraSoat.js';
import TableMoney from 'TableMoney';
import RowItemMoney from 'RowItemMoney';
import {connect} from 'react-redux';
import {closeModal} from 'actionCloseAccount';

var ModalTraSoatDienGiai = React.createClass({



   close(){
     console.log('đóng');
       this.props.closeModal();
   },

  render() {

    console.log(this.props.showModal);
    return (


         <Modal bsSize='small'  show={this.props.showModal} onHide={this.close.bind(this)}>
          <div>
          <Modal.Header closeButton>
            <Modal.Title><div className="title-modal-trasoat">Tra soát điều chỉnh điễn giải</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <FormModalTraSoat />
           <div className="wrapped inner45-DauTuDinhKy panel panel-success">
                <h4>Thông tin tin tra soát điều chỉnh nội dung diễn giải</h4>
                <div className="col-xs-12">
                    <h5 className="col-xs-3">Diễn giải giao dịch mới</h5>
                    <div className="col-xs-9 col-xs-pull-1 ">
                        <input type="text" placeholder="Diễn giải giao dịch mới" className="form-control" />
                    </div>

                </div>
         </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-success custom-btn-boostrap" onClick={this.close.bind(this)}>Chấp nhận</button>
            <button className="btn btn-primary custom-btn-boostrap" onClick={this.close.bind(this)}>Thoát</button>

          </Modal.Footer>
          </div>
        </Modal>


    );
  }
});
module.exports = ModalTraSoatDienGiai
