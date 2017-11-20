import React from 'react';
import {connect} from 'react-redux';
import {showModalThongTinUyQuyen,closeModalThongTinUyQuyen,showModalChiTiet} from 'actionDatLenh';

var ThongTinQuy = require('ThongTinQuy');
var UyQuyen = require('UyQuyen');
var ChiTiet = require('ChiTiet');
var DanhSachNDTDangKy = require('./components/DanhSachNDTDangKy.js');
var SoLenh = require('./components/SoLenh.js');
var PopupChiTietGoiSipNDT = require('./components/PopupChiTietGoiSipNDT.js');

class DauTuDinhKi extends React.Component{
  constructor(props){
    super(props);
  }
  ThongTinUyQuyen(){
    var {dispatch} = this.props;
    dispatch(showModalThongTinUyQuyen());
  }
  ModalChiTiet(){
    var {dispatch} = this.props;
    dispatch(showModalChiTiet());
  }
  render(){
    return(
    <div className="container panel panel-success">
        <div className="title-content">ĐĂNG KÝ ĐẦU TƯ ĐỊNH KÌ - NGỪNG THAM GIA</div>
        <form method="POST" action="#">
        <div className="inner panel panel-success">

            <div className="inner45-DauTuDinhKy panel panel-success">
                <h4>Thông tin đóng góp</h4>
                <div className="col-xs-12">
                    <h5 className="col-xs-5">Số hiệu TKGD</h5>
                    <div className="col-xs-7 "><input className="form-control" placeholder="8092138129082"/></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-5">Mã CCQ</h5>
                    <div className="col-xs-7 "><input className="form-control" placeholder="VFMVF1"/></div>
                </div>

                <div className="col-xs-12">
                    <h5 className="col-xs-5">Sản phẩm SIP</h5>
                    <div className="col-xs-4 ">
                        <select className="form-control">
                          <option>SIPSAVI</option>
                          <option>SIPSAV2 </option>
                        </select>
                    </div>
                    <input type="button" style={{height:"25px",padding:"2px 6px", width:"100px"}} onClick={this.ModalChiTiet.bind(this)} className="btn btn-info" id="inner45-btn" defaultValue="Chi tiết"  />
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-5">Số tiền đăng ký</h5>
                    <div className="col-xs-7">
                        <select className="form-control" >
                            <option>Đóng tiền cố định</option>
                            <option>Đóng tiền cố định </option>
                        </select>
                    </div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-5">Số tiền cố định</h5>
                    <div className="col-xs-7">
                        <input type="text" className="form-control" placeholder="500000" />
                    </div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-5">Số tiền linh hoạt tối thiểu</h5>
                    <div className="col-xs-7">
                        <input type="text" className="form-control" placeholder="Load, Edit, bắt buộc" />
                    </div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-5">Số tiền linh hoạt tối đa</h5>
                    <div className="col-xs-7">
                        <input type="text" className="form-control" placeholder="Load, không giới hạn" />
                    </div>
                </div>
            </div>

            <div className="inner55">

                <div className="inner55-default">
                    <div className="col-xs-12">
                      <div className="col-xs-8">
                        <div className="col-xs-12">
                            <h5 className="col-xs-5">Tên KH</h5>
                            <div className="col-xs-6 col-xs-offset-1"><input className="form-control" placeholder="Nguyễn Văn A"/></div>
                        </div>
                        <div className="col-xs-12">
                            <h5 className="col-xs-5">Tên KH</h5>
                            <div className="col-xs-6 col-xs-offset-1"><input className="form-control" placeholder="Nguyễn Văn A"/></div>
                        </div>
                        <div className="col-xs-12">
                            <h5 className="col-xs-5">Số ĐKSH</h5>
                            <div className="col-xs-6 col-xs-offset-1"><input className="form-control" placeholder="123456"/></div>
                        </div>
                      </div>
                      <div className="col-xs-4">
                        <input type="button" style={{width:"100%",height:"65px"}} className="btn btn-primary" onClick={this.ThongTinUyQuyen.bind(this)}  defaultValue="Thông tin ủy quyền" />
                        <label style={{width:"100%",marginTop:"1px"}} className="btn btn-primary">File ảnh CMT<input type="file" style={{width:"100%",marginTop:"1px"}} className="inputfile" defaultValue="File ảnh CMT" /></label>
                      </div>
                    </div>

                </div>

                <ThongTinQuy type="mua" />
            </div>

            <div className="wrapped inner45-DauTuDinhKy panel panel-success">
                <h4>Thông tin đóng góp</h4>
                <div className="col-xs-12">
                    <h5 className="col-xs-2">Kỳ đầu tư</h5>
                    <div className="col-xs-3 ">
                        <select className="form-control">
                            <option>Theo tháng</option>
                            <option>Theo ngày </option>
                        </select>
                    </div>
                    <h5 className="col-xs-2 col-xs-offset-1">Số kỳ đăng ký tham gia</h5>
                    <div className="col-xs-3 "><input className="form-control" placeholder="12"/></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-2">Chọn ngày giao dịch</h5>
                    <div className="col-xs-3 ">
                        <select className="form-control">
                            <option>5,20, Tất cả</option>
                            <option>Option</option>
                        </select>
                    </div>
                    <h5 className="col-xs-2 col-xs-offset-1">Từ ngày</h5>
                    <div className="col-xs-3 ">
                        <input type="date"  className="form-control" />
                    </div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-2">Thời gian đăng ký tham gia</h5>
                    <div className="col-xs-3 ">
                        <select className="form-control">
                            <option>Theo thời gian gói SIP</option>
                            <option>Option</option>
                        </select>
                    </div>
                    <h5 className="col-xs-2 col-xs-offset-1">Đến ngày </h5>
                    <div className="col-xs-3 ">
                        <input type="date" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="wrapped inner45-DauTuDinhKy panel panel-success">
            <div style={{marginTop:"10px"}} className="col-xs-12">
                <h5 className="col-xs-2 ">Thời điểm bắt đầu tham gia</h5>
                <div className="col-xs-3 ">
                    <input type="date" className="form-control" />
                </div>
                <input type="reset" className="btn btn-primary col-xs-1 col-xs-offset-1" defaultValue="Làm mới" />
                <input type="submit" className="btn btn-success col-xs-1 col-xs-offset-1" defaultValue="Thực hiện" />
            </div>
            </div>

        </div>
        </form>

        <UyQuyen />
        <ChiTiet />

        <div className="tab-datlenh">
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#tab1">Danh sách NĐT đăng ký định kỳ</a></li>
            </ul>

            <hr />
            <div className="tab-content">
              <div id="tab1" className="tab-pane fade in active">
                  <DanhSachNDTDangKy />
              </div>
          </div>
        </div>

        <div className="tab-datlenh">
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#tab1">Chi tiết goi SIP của NĐT</a></li>
            </ul>
            <hr />
            <div className="tab-content">
              <div id="tab1" className="tab-pane fade in active">
                  <PopupChiTietGoiSipNDT />
              </div>
          </div>
        </div>
    </div>
  )
}
}

module.exports = connect(function(state){
return{}
})(DauTuDinhKi);
