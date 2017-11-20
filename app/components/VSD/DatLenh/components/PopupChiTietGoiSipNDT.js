import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {searchListChiTietGoiSipNDT} from 'actionDatLenh';

class PopupChiTietGoiSipNDT extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        sumSoTienKhop : 0, sumViPham:0, sumSoDuHienCo : 0, sumSoLuongPhanBo : 0
      };
    }
    search(){
        var {dispatch} = this.props;
        var TuNgayPhatSinh = this.refs.TuNgayPhatSinh.value;
        var ToiNgayPhatSinh = this.refs.ToiNgayPhatSinh.value;
        var dataSearch = {TuNgayPhatSinh,ToiNgayPhatSinh};
        dispatch(searchListChiTietGoiSipNDT(dataSearch));
    }
    resetTable(){
      // var that = this;
      // io.sails.url = 'http://localhost:1337';
      // io.socket.get('user/getListSoDuHienCo', function(resData, jwres){
      //   var {dispatch} = that.props;
      //   console.log(jwres);
      //   console.log(resData);
      //   dispatch(getListSoDuHienCo(resData));
      // });

      axios.post('user/getListSoDuHienCo')
      .then((res) => {
        var {dispatch} = this.props;
        dispatch(getListSoDuHienCo(res.data));
      }).catch(err => console.log(err));
    }
    renderListChiTietGoiSip(){

    }
    componentWillReceiveProps(nextProps){
      this.state = {
        sumSoTienKhop : 0, sumViPham:0, sumSoDuHienCo : 0, sumSoLuongPhanBo : 0
      };
      console.log(nextProps);
    }
    render(){
      var that = this;
      return(
          <div className="inner">
              <div className="col-xs-12">
              <h5 >Từ ngày phát sinh</h5>
              <div className="col-xs-2"><input type="text" onKeyUp={this.search.bind(this)} className="form-control" placeholder="dd/mm/yyyy" ref="TuNgayPhatSinh" /></div>
              <div className="col-xs-1"></div>
              <h5 >Tới ngày phát sinh</h5>
              <div className="col-xs-2"><input type="text" onKeyUp={this.search.bind(this)} className="form-control" placeholder="dd/mm/yyyy" ref="ToiNgayPhatSinh"/></div>
              <input onClick={this.search.bind(this)} type="button" defaultValue="Tìm kiếm" className="btn btn-success" />
              <input onClick={this.resetTable.bind(this)} type="button" defaultValue="Làm mới" className="btn btn-primary" />
              </div>
              <br />
              <div className="table-solenh">
              <table className="table table-hover" >
                <thead>
                  <tr  className="success">
                    <th>STT</th>
                    <th>SHTKGD</th>
                    <th>Số ĐKSH</th>
                    <th>Mã CCQ</th>
                    <th>Ngày phát sinh</th>
                    <th>Số tiền khớp</th>
                    <th>Số lượng phân bố</th>
                    <th>Số dư hiện có</th>
                    <th>Vi phạm</th>
                  </tr>
                </thead>
                <tbody>{this.props.list.map(function(i,index){
                                !isNaN(i.SoTienKhop) ? that.state.sumSoTienKhop += parseInt(i.SoTienKhop):null;
                                !isNaN(i.SoDuHienCo) ? that.state.sumSoDuHienCo += parseInt(i.SoDuHienCo):null;
                                !isNaN(i.SoLuongPhanBo) ? that.state.sumSoLuongPhanBo += parseInt(i.SoLuongPhanBo):null;
                                i.ViPham === "" ? null:that.state.sumViPham++;
                                        return(
                                          <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{i.SHTKGD}</td>
                                            <td>{i.SDKSH}</td>
                                            <td>{i.MaCCQ}</td>
                                            <td>{i.NgayPhatSinh}</td>
                                            <td>{i.SoTienKhop}</td>
                                            <td>{i.SoLuongPhanBo}</td>
                                            <td>{i.SoDuHienCo}</td>
                                            <td>{i.ViPham}</td>
                                          </tr>
                                        )
                                      })
                                    }
                      <tr>
                          <td colSpan="4"></td>
                          <td>Tổng</td>
                          <td>{this.state.sumSoTienKhop}</td>
                          <td>{that.state.sumSoLuongPhanBo}</td>
                          <td>{that.state.sumSoDuHienCo}</td>
                          <td>{that.state.sumViPham}</td>
                      </tr>
                </tbody>
              </table>
              </div>
              <button className="btn btn-success" style={{float:"right"}}><span className="glyphicon glyphicon-download-alt pull-left"></span>  Kiết xuất</button>
          </div>

      )
    }
}

module.exports = connect(function(state){
  return {list: state.datLenh.searchListChiTietGoiSipNDT};
})(PopupChiTietGoiSipNDT);
