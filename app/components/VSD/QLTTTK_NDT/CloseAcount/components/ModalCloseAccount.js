import React from 'react';
import {Popover,OverlayTrigger,Tooltip,Button,Modal} from 'react-bootstrap'
import FormModal from 'FormModal';
import TableMoney from 'TableMoney';
import RowItemMoney from 'RowItemMoney';
import {connect} from 'react-redux';
import {closeModal} from 'actionCloseAccount';

var ModalCloseAccount = React.createClass({
  renderList(){
   return this.props.listMoney.map((row,index) => {
        return (
          <RowItemMoney

            maccq={row.maccq}
            khadung={row.khadung}
            muachove={row.muachove}
            tong={row.tong}
            key={index}
            banchora={row.banchora}

          />
        )
     })
   },
   close(){
      var {dispatch} =this.props;
       dispatch(closeModal());
   },
   access(){
      var {dispatch} =this.props;
       dispatch(closeModal());
   },
  render() {

    return (
      <div className="popup-form">


         <Modal show={this.props.showModal} onHide={this.close}>
          <div>
          <Modal.Header closeButton>
            <Modal.Title><div className="title-content">Đề nghị tất toán tài khoản</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FormModal />
            <hr />

            <div className="custom">Số dư</div>

            <TableMoney  />

             <hr />
             <div className="form-group row">
               <div className="col-xs-11">
                 <label>Diễn giải</label>
                 <input className="form-control" type="text"/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button  style={{padding:"5px",fontSize:"11px"}} className="btn btn-success" onClick={this.access}>Chấp nhận</button>
            <button style={{padding:"5px",fontSize:"11px ",marginLeft:"5px"}} className="btn btn-primary"  onClick={this.close}>Thoát</button>
          </Modal.Footer>
          </div>
        </Modal>

      </div>
    );
  }
});
module.exports = connect(function(state){
  return {showModal: state.closeAccount.showModal,
          infAccount:state.closeAccount.account

  };
})(ModalCloseAccount)
