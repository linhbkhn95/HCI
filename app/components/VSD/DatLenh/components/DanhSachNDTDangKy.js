import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {searchListNDTDangKy,getListNDTDangKy,showModalCease,showModalKichHoat,getListChiTietGoiSip} from 'actionDatLenh';

var PopupCease = require("./PopupCease.js");
var PopupKichHoat = require("./PopupKichHoat.js");

class DanhSachNDTDangKy extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    axios.post('user/getListNDTDangKy')
    .then(res => {
        var {dispatch} = this.props;
        console.log(res.data);
        dispatch(getListNDTDangKy(res.data));
    }).catch(err => console.log(err));
  }
  search(){
    var {dispatch} = this.props;
    var dataSearch={SHTKGD:this.refs.SHTKGD.value, MaCCQ:this.refs.MaQuy.value, SDKSH:this.refs.SDKSH.value};
    dispatch(searchListNDTDangKy(dataSearch));
  }
  cease(detailNDTDangKy){
    var {dispatch} = this.props;
    dispatch(showModalCease(detailNDTDangKy));
  }
  kichHoat(detailNDTDangKy){
    var {dispatch} = this.props;
    dispatch(showModalKichHoat(detailNDTDangKy));
  }
  chiTietGoiSipNDT(detailNDTDangKy){
    var {dispatch} = this.props;
    axios.post('/user/getListChiTietGoiSip',detailNDTDangKy)
    .then(res => dispatch(getListChiTietGoiSip(res.data)))
    .catch(err => console.log(err));
  }
  render(){
    var that = this;
    return(
        <div className="inner">
          <div className="col-xs-12">
              <h5>SHTKGD</h5>
              <div className="col-xs-1"><input onKeyUp={this.search.bind(this)} type="search" autoComplete="on" className="form-control" placeholder="081209381" ref="SHTKGD" /></div>
              <h5>SDKSH</h5>
              <div className="col-xs-1"><input onKeyUp={this.search.bind(this)} type="search" autoComplete="on" className="form-control" placeholder="123456" ref="SDKSH" /></div>
              <h5>Mã quỹ</h5>
              <div className="col-xs-1"><input onKeyUp={this.search.bind(this)}  type="search" autoComplete="on" className="form-control" ref="MaQuy" /></div>
              <h5>Gói SIP</h5>
              <div className="col-xs-1">
                <select className="form-control">
                    <option>Tất cả</option>
                    <option>Tất cả</option>
                </select>
              </div>

              <h5>Trạng thái</h5>
              <div className="col-xs-1">
                <select className="form-control">
                    <option>Vi phạm</option>
                    <option>Vi phạm</option>
                </select>
              </div>
              <input onClick={this.search.bind(this)} type="button" className="btn btn-success" defaultValue="Tìm kiếm"/>
              <input type="button" className="btn btn-primary" defaultValue="Làm mới" />
          </div>
          <br />
          <div className="table-solenh">
          <table style={{textAlign:"center"}} className="table table-hover">
            <thead>
              <tr  className="success">
                <th>Hủy/Sửa</th>
                <th>SHTKGD</th>
                <th>Số ĐKSH</th>
                <th>Mã CCQ</th>
                <th>Ngày giao dịch</th>
                <th>Sản phẩm SIP</th>
                <th>Số tiền đăng ký</th>
                <th>Thời điểm bắt</th>
                <th>Số kỳ VP liên tục</th>
                <th>Tổng số kỳ VP</th>
                <th>Trạng thái</th>
                <th>Ngừng</th>
                <th>Loại ngừng TG</th>
                <th>Kích hoạt</th>
              </tr>
            </thead>
            <tbody>{this.props.list.map(function(i,index){
                                    return(
                                      <tr key={index}>
                                      <td style={{padding:"0px"}}><div><button className="btn btn-danger">Hủy</button><button className="btn btn-info">Sửa</button></div></td>

                                        <td>{i.SHTKGD}</td>
                                        <td>{i.SDKSH}</td>
                                        <td>{i.MaCCQ}</td>
                                        <td>{i.NgayGiaoDich}</td>
                                        <td style={{cursor:"pointer"}} onDoubleClick={that.chiTietGoiSipNDT.bind(that, i)}>{i.SanPhamSIP}</td>
                                        <td>{i.SoTienDangKy}</td>
                                        <td>{i.ThoiDiemBatDau}</td>
                                        <td>{i.SoKyVPLienTuc}</td>
                                        <td>{i.TongSoKyVP}</td>
                                        <td>{i.TrangThai}</td>
                                        <td style={{cursor:"pointer"}} onClick={that.cease.bind(that, i)}><span style={{color:"#5cb85c"}} className="glyphicon glyphicon-remove"></span></td>
                                        <td>{i.LoaiNgungTG}</td>
                                        <td><input type="button" onClick={that.kichHoat.bind(that, i)} defaultValue="Kích hoạt" className="btn btn-success" /></td>
                                      </tr>
                                    )
                                  })
                                }
            </tbody>
          </table>
          </div>

          <PopupCease />
          <PopupKichHoat />

        </div>
    )
  }
}

module.exports = connect(function(state){
  return{list:state.datLenh.searchListNDTDangKy}
})(DanhSachNDTDangKy);
