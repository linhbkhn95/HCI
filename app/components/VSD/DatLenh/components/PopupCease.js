import React from 'react';
import {connect} from 'react-redux';
import {closeModalCease} from 'actionDatLenh';
import {Modal,Button} from 'react-bootstrap';

class PopupCease extends React.Component{
  constructor(props){
    super(props);
  }
  close(){
    var {dispatch} = this.props;
    dispatch(closeModalCease());
  }
  render(){
    return(
      <div className="popup-form">
          <Modal bsSize="sm" show={this.props.showModal} onHide={this.close}>
              <Modal.Header>
                  <Modal.Title> <div className="title-popup">Ngừng tham gia đầu tư định kỳ</div> </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{overflow:"auto",height:"100%"}}>
              <div>
                <div className="col-xs-12" style={{marginBottom:"10px"}}>
                    <h5 className="col-xs-2">Số hiệu TKGD</h5>
                    <div className="col-xs-3"><input type="text" value={this.props.detailNDTDangKy.SHTKGD} className="form-control" /></div>
                    <h5 className="col-xs-2 col-xs-offset-1">Tên khách hàng</h5>
                    <div className="col-xs-3"><input type="text" value="Pham Xuan Bien" className="form-control" /></div>
                </div>
                <div>
                  <div className="col-xs-12" style={{marginBottom:"10px"}}>
                      <h5 className="col-xs-2">Mã quỹ</h5>
                      <div className="col-xs-3"><input type="text" value={this.props.detailNDTDangKy.MaCCQ} className="form-control" /></div>
                      <h5 className="col-xs-2 col-xs-offset-1">Tên quỹ</h5>
                      <div className="col-xs-3"><input type="text" value="Autofill" className="form-control" /></div>
                  </div>
                </div>
                <div className="col-xs-12" style={{marginBottom:"10px"}}>
                    <h5 className="col-xs-2">Sản phẩm SIP</h5>
                    <div className="col-xs-9"><input type="text" className="form-control" value={this.props.detailNDTDangKy.SanPhamSIP} /></div>
                </div>

                <div className="cease-blank">
                    <div className="half1">
                      <div className="col-xs-12">
                        <h5>Loại</h5>
                        <div className="input">
                            <select className="form-control">
                                <option>Ngừng tạm thời</option>
                                <option>Ngừng hẳn</option>
                            </select>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <h5>Ngày hiệu lực </h5>
                        <div className="input">
                          <input type="text" className="form-control" value={this.props.detailNDTDangKy.ThoiDiemBatDau} />
                        </div>
                      </div>
                    </div>

                    <div className="half2">
                      <div className="col-xs-12">
                        <h5>Hiệu lực từ ngày</h5>
                        <div className="input">
                          <input type="text" value={this.props.detailNDTDangKy.ThoiDiemBatDau} className="form-control" />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <h5>Hiệu lực từ ngày</h5>
                        <div className="input">
                          <input type="text" value={this.props.detailNDTDangKy.ThoiDiemBatDau} className="form-control" />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <h5>Hiệu lực từ ngày</h5>
                        <div className="input">
                          <input type="text" value={this.props.detailNDTDangKy.ThoiDiemBatDau} className="form-control" />
                        </div>
                      </div>
                    </div>

                </div>

                <div className="col-xs-12" style={{marginBottom:"30px"}}>
                    <h5 className="col-xs-2">Diễn giải</h5>
                    <div className="col-xs-9"><input type="text" className="form-control" defaultValue="Ngừng tham gia gói SIP" /></div>
                </div>

              </div>
              </Modal.Body>
              <Modal.Footer>
                <input type="button" style={{marginLeft:"10px",height:"30px"}} className="btn btn-success" defaultValue="Chấp nhận" />
                <Button onClick={this.close.bind(this)}>Thoát</Button>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

module.exports = connect(function(state){
    return{showModal: state.datLenh.showModalCease, detailNDTDangKy:state.datLenh.detailNDTDangKy};
})(PopupCease);
