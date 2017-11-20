import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap'
import FormModal from 'FormModal';
import ModalTraSoat from './ModalTraSoat.js';
import ModalDieuChinhTienNop from './ModalDieuChinhTienNop.js';
import RowItemMoney from 'RowItemMoney';
import {connect} from 'react-redux';
import {closeModal} from 'actionCloseAccount';

var ModalThongTinMonTienNop = React.createClass({
  getInitialState(){
    return{

       listdata:[
          {sochungtu:"00001",sotien:"3000000",diengiai:"Thường"},
          {sochungtu:"00001",sotien:"3000000",diengiai:"SIP.FLEX"}
       ],
       showModalTraSoat:false,
       showModalTraSoatDieuChinhThongTinNop:false
    }
  },
  dieuChinhTien(){
    console.log('dieuChinhTien');
    this.setState({showModalTraSoatDieuChinhThongTinNop:true});
  },
  dieuChinhDienGiai(){
    console.log('dieuChinhDienGiai');
    this.setState({showModalTraSoat:true});
  },
  closeModalDienGiai(){
    this.setState({showModalTraSoat:false});
  },
  closeModalDieuChinhTienNop(){
    this.setState({showModalTraSoatDieuChinhThongTinNop:false});
  },
  renderList(){
    var that =this;
   return this.state.listdata.map((row,index) => {
        return (
          <tr>
              <td>{row.sochungtu}</td>
              <td>{row.sotien}</td>
              <td>{row.diengiai}</td>
              <td>
                  <button style={{fontSize:"12px",padding:"5px", float:"left"}} onClick={that.dieuChinhTien.bind(that)} className="btn btn-primary">Điều chỉnh tiền nộp</button>
                  <button  style={{fontSize:"12px",padding:"5px",marginLeft:"2px",float:"left"}} onClick={that.dieuChinhDienGiai.bind(that)} className="btn btn-success">Điều chỉnh diễn giải</button>
              </td>
          </tr>

        )
     })
   },
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
            <Modal.Title><div className="">Thông tin các món tiền nộp</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="rows ">
            <Table style={{textAlign:"center"}} striped bordered condensed hover>
            <thead>

             <tr>
                <th className="th-item-lenh">Số chứng từ</th>
                <th className="th-item-lenh">Số tiền</th>
                <th className="th-item-lenh">Diễn giải chi tiết</th>
                <th></th>

             </tr>
            </thead>
              {this.renderList()}
          </Table>

            </div>
            <ModalTraSoat showModal={this.state.showModalTraSoat} closeModal={this.closeModalDienGiai.bind(this)} />
            <ModalDieuChinhTienNop showModal={this.state.showModalTraSoatDieuChinhThongTinNop} closeModal={this.closeModalDieuChinhTienNop.bind(this)} />
          </Modal.Body>
          <Modal.Footer>
            <button  style={{fontSize:"12px"}} className="btn btn-primary" onClick={this.close.bind(this)}>Thoát</button>

          </Modal.Footer>
          </div>
        </Modal>


    );
  }
});
module.exports = ModalThongTinMonTienNop
