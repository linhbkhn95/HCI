import React from 'react';
import {connect} from 'react-redux';
import {closeModalChiTiet} from 'actionDatLenh';
import {Modal,Button} from 'react-bootstrap';

class ChiTiet extends React.Component{
  constructor(props){
    super(props);
    var list = [{SHTKGD:"009C12312321", KhaDung:"30000", NgayPhatSinh:"22/04/2017",SoLuongDatBan:"20000"},
                {SHTKGD:"009C12312321", KhaDung:"5000", NgayPhatSinh:"22/05/2017",SoLuongDatBan:"3000"},
                {SHTKGD:"009C12312321", KhaDung:"0", NgayPhatSinh:"22/06/2017",SoLuongDatBan:"0"}]
    this.state = { list: list };
  }
  close(){
    var {dispatch} = this.props;
    dispatch(closeModalChiTiet());
  }
  render(){
    var sum = 0;
    return(
      <div className="popup-form">
          <Modal bsSize="sm" show={this.props.showModal} onHide={this.close}>
              <Modal.Header>
                  <Modal.Title> <div className="title-popup">Ủy quyền</div> </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{overflow:"auto",height:"100%"}}>
              <div>
              <div className="col-xs-12" style={{marginBottom:"10px"}}>
                  <label className="radio-inline"><input type="radio" name="optradio"/>Bán hết</label>
                  <label className="radio-inline"><input type="radio" name="optradio"/>Bán một phần</label>
              </div>
              <table className="table table-hover" >
                <thead>
                  <tr  className="success">
                    <th>SHTKGD</th>
                    <th>Khả dụng</th>
                    <th>Ngày phát sinh</th>
                    <th>Số lượng đặt bán</th>
                  </tr>
                </thead>
                <tbody>{this.state.list.map(function(i,index){
                                var SoLuongDatBan = parseInt(i.SoLuongDatBan);
                                sum += SoLuongDatBan;
                                        return(
                                          <tr key={index}>
                                            <td>{i.SHTKGD}</td>
                                            <td>{i.KhaDung}</td>
                                            <td>{i.NgayPhatSinh}</td>
                                            <td>{i.SoLuongDatBan}</td>
                                          </tr>
                                        )
                                      })
                                    }
                  <tr>
                      <td colSpan="2"></td>
                      <td>Tổng bán</td>
                      <td>{sum}</td>
                  </tr>
                </tbody>
              </table>
              <div className="col-xs-12" style={{marginBottom:"20px"}}>
                  <input type="button" style={{marginLeft:"10px"}} className="btn btn-success" defaultValue="Thực hiện" />
                  <input type="button" style={{marginLeft:"10px"}} className="btn btn-primary" defaultValue="Làm mới" />
              </div>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close.bind(this)}>Thoát</Button>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

module.exports = connect(function(state){
    return{showModal: state.datLenh.showModalChiTiet};
})(ChiTiet);
