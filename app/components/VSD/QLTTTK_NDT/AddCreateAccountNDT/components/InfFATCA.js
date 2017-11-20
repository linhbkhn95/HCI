import React from 'react';
var ModalnfFATCA  = require('./ModalInfFatca');
module.exports = class InfFATCA extends React.Component{

  showModal(){
    this.setState({showModal:true});
  }
  closeModal(){
    this.setState({showModal:false});
  }
  render(){
    return(
        <div>
          <div className="col-xs-12">
              <button onClick={this.showModal.bind(this)} className="btn btn-primary btn-customer" ><span className="glyphicon glyphicon-plus-sign"></span> Insert</button>
              <button className="btn btn-success btn-customer" ><span className="glyphicon glyphicon-pencil"></span> Edit</button>
              <button className="btn btn-danger btn-customer" ><span className="glyphicon glyphicon-remove"></span> Delete</button>
              <button className="btn btn-info btn-customer" ><span className="glyphicon glyphicon-list"></span> Lấy dữ liệu</button>
          </div>

          <div className="content-left">
              <table className="table table-hover" >
                <thead>
                  <tr  className="success">
                    <th>Số hiệu TKGD</th>
                    <th>Họ tên</th>
                    <th>Sinh tại Hoa Kỳ</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                    <th>Số điện thoại</th>
                    <th>Công dân Hoa Kỳ</th>

                  </tr>
                </thead>
                <tbody>
                {this.state.data.map(function(i,index){

                                        return(
                                          <tr key={index}>
                                            <td>{i.SHTKGD}</td>
                                            <td>{i.HoTen}</td>
                                            <td>{i.IsHoaKi}</td>
                                            <td>{i.DiaChi}</td>
                                            <td>{i.NgayTao}</td>
                                            <td>{i.SoDT}</td>
                                            <td>{i.ConDanHoaKi}</td>

                                          </tr>
                                        )
                                      })
                                    }
                </tbody>
              </table>
          </div>
          <ModalnfFATCA
           showModal ={this.state.showModal}
           close ={this.closeModal.bind(this)}
          />

        </div>
    )
  }
  constructor(props){
      super(props);
      var list = [
        {SHTKGD:"20132323", HoTen:"Trịnh đức Bảo Linh",IsHoaKi:"Không",DiaChi:"Bắc Ninh", NgayTao:"19/04/1995", SoDT:"01689952267",ConDanHoaKi:"Không"} ,
        {SHTKGD:"20134272", HoTen:"Nguyễn thị Xuân",IsHoaKi:"Không",DiaChi:"Bắc Ninh", NgayTao:"19/04/1995", SoDT:"01689952267" ,ConDanHoaKi:"Không"} ,
        {SHTKGD:"20132886", HoTen:"Trịnh đức Giang",IsHoaKi:"Không",DiaChi:"Bắc Ninh", NgayTao:"19/04/1995", SoDT:"01689952267",ConDanHoaKi:"Không" }


      ];
      this.state = {
          data : list,
          showModal:false
      };
  }
}
