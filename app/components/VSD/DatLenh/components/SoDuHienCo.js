import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getListSoDuHienCo,searchSoDuHienCo} from 'actionDatLenh';

class SoDuHienCo extends React.Component{
    constructor(props){
      super(props);
    }
    componentWillMount(){
      axios.post('datlenh/getSoDuHienCo')
      .then((res) => {
        var {dispatch} = this.props;
        dispatch(getListSoDuHienCo(res.data.soduhienco));
      }).catch(err => console.log(err));
      // var that = this
      // io.socket.post('user/getListSoDuHienCo', function(resData, jwres){
      //   var {dispatch} = that.props;
      //   console.log(jwres);
      //   console.log(resData);
      //   dispatch(getListSoDuHienCo(resData));
      // });
    }
    search(){
        var {dispatch} = this.props;
        var SHTKGD = this.refs.SHTKGD.value;
        var MaCCQ = this.refs.MaCCQ.value;
        var dataSearch = {SHTKGD,MaCCQ};
        dispatch(searchSoDuHienCo(dataSearch));
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
    render(){
      return(
          <div className="inner">
              <div className="col-xs-12">
              <h5 >Số hiệu tài khoản giao dịch</h5>
              <div className="col-xs-2"><input type="text" onKeyUp={this.search.bind(this)} className="form-control" placeholder="081209381" ref="SHTKGD" /></div>
              <div className="col-xs-1"></div>
              <h5 >Mã CCQ</h5>
              <div className="col-xs-2"><input type="text" onKeyUp={this.search.bind(this)} className="form-control" placeholder="VFMVF1" ref="MaCCQ"/></div>
              <input onClick={this.search.bind(this)} type="button" defaultValue="Tìm kiếm" className="btn btn-success" />
              <input onClick={this.resetTable.bind(this)} type="button" defaultValue="Làm mới" className="btn btn-primary" />
              </div>
              <br />
              <div className="table-solenh">
              <table className="table table-hover" >
                <thead>
                  <tr  className="success">
                    <th>SHTKGD</th>
                    <th>Mã CCQ</th>
                    <th>Tổng</th>
                    <th>Khả dụng</th>
                    <th>Ngày phát sinh</th>
                    <th>Loại</th>
                    <th>Sản phẩm</th>
                  </tr>
                </thead>
                <tbody>{this.props.list.map(function(i,index){
                                        return(
                                          <tr key={index}>
                                            <td>{i.SHTKGD}</td>
                                            <td>{i.MaCCQ}</td>
                                            <td>{i.Tong}</td>
                                            <td>{i.KhaDung}</td>
                                            <td>{i.NgayPhatSinh}</td>
                                            <td>{i.Loai}</td>
                                            <td>{i.SanPham}</td>
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
  return {list: state.datLenh.searchListSoDuHienCo};
})(SoDuHienCo);
