import React from 'react';
import {connect} from 'react-redux';
import {showModalThongTinUyQuyen,closeModalThongTinUyQuyen,showModalChiTiet} from 'actionDatLenh';

var ThongTinQuy = require('ThongTinQuy');
var UyQuyen = require('UyQuyen');
var ChiTiet = require('ChiTiet');
var SoDuHienCo = require('./components/SoDuHienCo.js');
var SoLenh = require('./components/SoLenh.js');

class HoanDoiGoiSip extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      LoaiLenh: "hoandoi"
    }
  }
  ThongTinUyQuyen(){
    var {dispatch} = this.props;
    dispatch(showModalThongTinUyQuyen());
  }
  ModalChiTiet(){
    var {dispatch} = this.props;
    dispatch(showModalChiTiet());
  }
  componentWillMount(){
  }
  changeLoaiLenh(){
    var loaiLenh = this.refs.loaiLenh.value;
    this.state.LoaiLenh = loaiLenh;
    this.setState(this.state);
  }

  render(){
    var {LoaiLenh} = this.state;
    var renderGiaTriMuaSLBan = null;
    if(LoaiLenh === "hoandoi"){
        renderGiaTriMuaSLBan = <div>
        <div className="col-xs-12">
            <h5 className="col-xs-5">Giá trị mua</h5>
            <div className="col-xs-7"><input className="form-control" placeholder="500.000"/></div>
        </div>
        <div className="col-xs-12">
            <h5 className="col-xs-5">Số lượng bán</h5>
            <div className="col-xs-4"><input className="form-control" placeholder="0"/></div>
            <input type="button" className="btn btn-info" id="inner45-btn" defaultValue="Chi tiết" onClick={this.ModalChiTiet.bind(this)} />
        </div>
        </div>;
    }else if(LoaiLenh === "mua"){
      renderGiaTriMuaSLBan =
      <div className="col-xs-12">
          <h5 className="col-xs-5">Giá trị mua</h5>
          <div className="col-xs-7"><input className="form-control" placeholder="500.000"/></div>
      </div>
    }else{
      renderGiaTriMuaSLBan =
      <div className="col-xs-12">
          <h5 className="col-xs-5">Số lượng bán</h5>
          <div className="col-xs-4"><input className="form-control" placeholder="0"/></div>
          <input type="button" className="btn btn-info" id="inner45-btn" defaultValue="Chi tiết" onClick={this.ModalChiTiet.bind(this)} />
      </div>
    }
    var renderThongTinQuy = LoaiLenh === "hoandoi" ? <div><ThongTinQuy type="mua"/><ThongTinQuy type="ban"/></div>:<ThongTinQuy type={LoaiLenh} />;

    return(
      <div className="container panel panel-success">
          <div className="title-content">Hoán đổi gói SIP</div>
          <form method="POST" action="#">
          <div className="inner panel panel-success">

              <div className="inner45">
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Số hiệu TKGD</h5>
                      <div className="col-xs-7 "><input className="form-control" placeholder="8092138129082"/></div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Loại lệnh</h5>
                      <div className="col-xs-7 ">
                          <select onChange={this.changeLoaiLenh.bind(this)} ref="loaiLenh" className="form-control">
                            <option value="hoandoi">Hoán đổi</option>
                            <option value="mua">Mua</option>
                            <option value="ban">Bán</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Mã CCQ</h5>
                      <div className="col-xs-7 "><input className="form-control" placeholder="VFMVF1"/></div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Sản phẩm</h5>
                      <div className="col-xs-7 ">
                          <select className="form-control">
                            <option>Thông thường </option>
                            <option>Gì gì đó </option>
                          </select>
                      </div>
                  </div>

                  {renderGiaTriMuaSLBan}

                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Phí dự kiến</h5>
                      <div className="col-xs-7"><input className="form-control" disabled placeholder="100.000"/></div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Mã CCQ hoán đổi</h5>
                      <div className="col-xs-7"><input className="form-control" placeholder="VFMVF1"/></div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Sản phẩm</h5>
                      <div className="col-xs-4 ">
                          <select className="form-control">
                            <option>SIPSAVI</option>
                            <option>SIPSAV2 </option>
                          </select>
                      </div>
                      <input type="button" className="btn btn-info" id="inner45-btn" defaultValue="Đăng kí SIP" onClick={this.ModalChiTiet.bind(this)} />
                  </div>
                  <div className="col-xs-12">
                      <input type="reset" className="col-xs-offset-1 col-xs-3 btn btn-primary inner45-btn" defaultValue="Làm mới" />
                      <input type="submit" className="col-xs-3 btn btn-success inner45-btn" defaultValue="Thực hiện" />
                  </div>
                  
              </div>

              <div className="inner55">

                  <div className="inner55-default">
                      <div className="col-xs-12">
                        <div className="col-xs-8">
                          <div className="col-xs-12">
                              <h5 className="col-xs-4">Tên KH</h5>
                              <div className="col-xs-8"><input className="form-control" placeholder="Nguyễn Văn A"/></div>
                          </div>
                          <div className="col-xs-12">
                              <h5 className="col-xs-4">Tên KH</h5>
                              <div className="col-xs-8"><input className="form-control" placeholder="Nguyễn Văn A"/></div>
                          </div>
                          <div className="col-xs-12">
                              <h5 className="col-xs-4">Số ĐKSH</h5>
                              <div className="col-xs-8"><input className="form-control" placeholder="123456"/></div>
                          </div>
                        </div>
                        <div className="col-xs-4">
                          <input type="button" style={{width:"100%",height:"65px"}} className="btn btn-primary" onClick={this.ThongTinUyQuyen.bind(this)} defaultValue="Thông tin ủy quyền" />
                          <label style={{width:"100%",marginTop:"1px"}} className="btn btn-primary">File ảnh CMT<input type="file" style={{width:"100%",marginTop:"1px"}} className="inputfile" defaultValue="File ảnh CMT" /></label>
                        </div>
                      </div>

                  </div>

                  { renderThongTinQuy }

              </div>
          </div>
          </form>

          <UyQuyen />
          <ChiTiet />
          <div className="tab-datlenh">
              <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" href="#tab1"><b>Sổ lệnh</b></a></li>
                  <li><a data-toggle="tab" href="#tab2"> <b>Số dư hiện có</b></a></li>
              </ul>

              <hr />
              <div className="tab-content">
                <div id="tab1" className="tab-pane fade in active">
                    <SoLenh />
                </div>
                <div id="tab2" className="tab-pane fade">
                    <SoDuHienCo />
                </div>
            </div>
          </div>
      </div>
    )
  }
}

module.exports = connect(function(state){
  return{}
})(HoanDoiGoiSip);
