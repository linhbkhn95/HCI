import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {searchListSoLenh,getListSoLenh} from 'actionDatLenh';

class SoLenh extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    axios.post('datlenh/getSoLenh')
    .then(res => {
        var {dispatch} = this.props;
        console.log(res.data);
        dispatch(getListSoLenh(res.data.solenh));
    }).catch(err => console.log(err));
  }
  search(){
    var {dispatch} = this.props;
    var dataSearch={SHTKGD:this.refs.SHTKGD.value, MaCCQ:this.refs.MaQuy.value};
    dispatch(searchListSoLenh(dataSearch));
  }
  render(){
    return(
        <div className="inner">
          <div className="col-xs-12">
              <h5>Số hiệu TKGD</h5>
              <div className="col-xs-2"><input onKeyUp={this.search.bind(this)} type="text" className="form-control" placeholder="081209381" ref="SHTKGD" /></div>
              <h5>Mã quỹ</h5>
              <div className="col-xs-2"><input onKeyUp={this.search.bind(this)}  type="text" className="form-control" ref="MaQuy" /></div>
              <h5>Trạng thái</h5>
              <div className="col-xs-2">
                <select className="form-control">
                    <option>Tất cả</option>
                    <option>Tất cả</option>
                </select>
              </div>
              <input onClick={this.search.bind(this)} type="button" className="btn btn-success" defaultValue="Tìm kiếm"/>
              <input type="button" className="btn btn-primary" defaultValue="Làm mới" />
          </div>
          <br />
          <div className="table-solenh">
          <table className="table table-hover">
            <thead>
              <tr  className="success">
                <th>
                    <button type="button" className="btn btn-danger" defaultValue="Hủy toàn bộ" >Hủy toàn bộ</button>
                </th>
                <th>Hủy/Sửa</th>
                <th>Mã CCQ</th>
                <th>SHTKGD</th>
                <th>Mua/Bán</th>
                <th>Loại lệnh</th>
                <th>Sản phẩm</th>
                <th>Trạng thái</th>
                <th>Giá trị</th>
                <th>Số lượng</th>
                <th>Ngày đặt lệnh</th>
                <th>Ngày giao dịch</th>
                <th>User đặt</th>
              </tr>
            </thead>
            <tbody>{this.props.list.map(function(i,index){
                                    return(
                                      <tr key={index}>
                                      <td><input style={{marginLeft:"25px"}} type="checkbox" /></td>
                                      <td style={{padding:"0px"}}><div><button className="btn btn-danger">Hủy</button><button className="btn btn-info">Sửa</button></div></td>
                                        <td>{i.MaCCQ}</td>
                                        <td>{i.SHTKGD}</td>
                                        <td>{i.MuaBan}</td>
                                        <td>{i.LoaiLenh}</td>
                                        <td>{i.SanPham}</td>
                                        <td>{i.TrangThai}</td>
                                        <td>{i.GiaTri}</td>
                                        <td>{i.SoLuong}</td>
                                        <td>{i.NgayDatLenh}</td>
                                        <td>{i.NgayGiaoDich}</td>
                                        <td>{i.UserDat}</td>
                                      </tr>
                                    )
                                  })
                                }
            </tbody>
          </table>
          </div>
        </div>
    )
  }
}

module.exports = connect(function(state){
  return{list:state.datLenh.searchListSoLenh}
})(SoLenh);
