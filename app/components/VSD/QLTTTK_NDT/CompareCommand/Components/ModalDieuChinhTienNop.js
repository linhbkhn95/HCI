import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap'
import FormModalTraSoat from './FormModalTraSoat.js';
import TableMoney from 'TableMoney';
import RowItemMoney from 'RowItemMoney';
import {connect} from 'react-redux';
import {closeModal} from 'actionCloseAccount';

var ModalDieuChinhTienNop = React.createClass({
  getInitialState(){
    return{
       listdata:[
          {sohieulenh:"001",maccq:"VF1",lenh:"Thường",giatrimua:"10,000,000",sotienthieu:"4.000.000",sotientrathoat:"4.000.000"},
          {sohieulenh:"002",maccq:"VF2",lenh:"SIP.FLEX",giatrimua:"15,000,000",sotienthieu:"4.000.000",sotientrathoat:"4.000.000"},
       ]
    }
  },


   close(){
     console.log('đóng');
       this.props.closeModal();
   },
   renderList(){
     var that =this;
    return this.state.listdata.map((row,index) => {
         return (
           <tr>
               <td>{row.sohieulenh}</td>
               <td>{row.maccq}</td>
               <td>{row.lenh}</td>
               <td>{row.giatrimua}</td>
               <td>{row.sotienthieu}</td>
               <td>{row.sotientrathoat}</td>

               <td>
                   <button style={{float:"left",fontSize:"10px"}} className="btn btn-danger glyphicon glyphicon-remove custom-btn-boostrap"></button>

               </td>
           </tr>

         )
      })
    },
  render() {

    console.log(this.props.showModal);
    return (


         <Modal bsSize='small'  show={this.props.showModal} onHide={this.close.bind(this)}>
          <div>
          <Modal.Header closeButton>
            <Modal.Title><div className="title-modal-trasoat">Tra soát điều chỉnh tiền nộp</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <FormModalTraSoat />
           <div className="wrapped  panel panel-success">
                <h4>Thông tin tin tra soát điều chỉnh tiền</h4>
                <div className="col-xs-12">

                    <h5 className="col-xs-3">Số tiền điều chỉnh</h5>
                    <div className="col-xs-2 col-xs-pull-1">
                        <input type="text" placeholder="Số tiền.." className="form-control" />
                    </div>
                    <h5 className="col-xs-2 col-xs-pull-1" >Số hiệu lệnh</h5>
                    <div className="col-xs-4 col-xs-pull-2">

                          <input type="text" placeholder="F5 lấy số hiệu lệnh" className="form-control" />



                    </div>
                    <div className="col-xs-1 col-xs-pull-1">
                      <input type="button" value="Thêm" className="btn btn-primary custom-btn-boostrap "  />
                    </div>

                </div>

                <div className="rows col-xs-12 ">
                  <Table style={{textAlign:"center"}} striped bordered condensed hover>
                  <thead>

                   <tr>
                      <th className="th-item-lenh">Số hiệu lênh</th>
                      <th className="th-item-lenh">Mã CCQ</th>
                      <th className="th-item-lenh">Lệnh</th>
                      <th className="th-item-lenh">Giá trị mua</th>
                      <th className="th-item-lenh">Số tiền thiếu</th>
                      <th className="th-item-lenh">Số tra thoát</th>
                      <th></th>

                   </tr>
                  </thead>
                    {this.renderList()}
                </Table>

                  </div>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <button  className="btn btn-success custom-btn-boostrap" onClick={this.close.bind(this)}>Chấp nhận</button>
            <button className="btn btn-primary custom-btn-boostrap" onClick={this.close.bind(this)}>Thoát</button>

          </Modal.Footer>
          </div>
        </Modal>


    );
  }
});
module.exports = ModalDieuChinhTienNop
