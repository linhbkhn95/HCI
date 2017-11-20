import React from 'react';


var KetQuaKhopDuaKienDieuChinhNop = React.createClass({
 getInitialState(){
   return{
       listdata:[

            {maccq:"VFMVF1",shtk:"999C1123456",sohieulenh:"Thường",loailenh:"Thường",sanpham:"Thường",giatrilenh:"100000",giatritiennhantrasoat:"5000",giatritiensautrasoat:"6000",trangthai:"Chưa khớp"},
            {maccq:"VFMVF4",shtk:"999C1123334",sohieulenh:"Mua",loailenh:"SIP",sanpham:"iSaving",giatrilenh:"150000",giatritiennhantrasoat:"15000",giatritiensautrasoat:"16000",trangthai:" khớp"}

       ]
   }
 },
  render(){
    return(
      <div className= "panel panel-success">
       <div className=" col-xs-12 rows form-search">

        <div className="col-xs-3 ">
          <div className="col-xs-6" style={{paddingTop:"5px"}}><label>Số hiệu TKGD</label></div>
            <div className="col-xs-6">
            <input  id="exampleInputName2" placeholder="Số hiệu TKGD" type="text" className="form-control" />
            </div>

         </div>
          <div className="col-xs-3 ">
            <div className="col-xs-5" style={{paddingTop:"5px"}}><label>Mã quỹ</label></div>
             <div className="col-xs-7">
                  <input className="form-control" placeholder="Mã quỹ" type="text" />

             </div>
          </div>
          <div className="col-xs-3">
            <div className="col-xs-5"  style={{paddingTop:"5px"}}><label >Trạng thái</label></div>
            <div className="col-xs-7">
                    <select ref="sl" className="form-control">
                               <option>Tất cả</option>
                              <option></option>
                              <option></option>
                              <option></option>
                    </select>
            </div>
           </div>

          <div className="col-xs-3">

              <input type="button" className="btn btn-primary col-md-4 col-xs-offset-1 col-xs-3" style={{padding:"4px",fontSize:"11px"}} value="Tìm kiếm" />
              <input type="button" className="btn btn-success col-md-4 col-xs-offset-1 col-xs-3 col-md-offset-1" style={{padding:"4px",fontSize:"11px"}}  value="Làm mới" />


          </div>

        </div>
          <div className="table-responsive">

            <table className="table table-bordered">
              <thead >
                <tr  className="primary th-item">
                  <th style={{textAlign:"center"}}>
                    <input type="checkbox"  />


                   </th>
                  <th colSpan="2" style={{textAlign:"center"}} >Hủy/Sửa</th>
                  <th>Mã CCQ</th>
                  <th>Số ĐKSH</th>
                  <th>Số hiệu lệnh</th>
                  <th>Loại lệnh</th>
                  <th>Sản phẩm</th>
                  <th>Giá trị lệnh</th>
                  <th>Giá trị tiền nhận tra soát</th>
                  <th>Giá trị tiền nhận sau tra soát</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              {this.state.listdata.map(function(i,index){

                                      return(
                                        <tr className="tr-compare" key={index}  >
                                          <td>
                                          <div className ="check-box-item">

                                           <input  type="checkbox"   />


                                           </div>
                                          </td>
                                           <td colSpan="2" style={{textAlign:"center"}} >
                                           <button  className="btn btn-primary btn-row" > <span className="glyphicon glyphicon-edit"></span></button>
                                           <button style={{marginLeft:"5px"}} className="btn btn-danger btn-row "><span className="glyphicon glyphicon-remove"></span></button>

                                           </td>

                                          <td >{i.maccq}</td>
                                          <td>{i.shtk}</td>
                                          <td>{i.sohieulenh}</td>
                                          <td>{i.loailenh}</td>
                                          <td>{i.sanpham}</td>

                                          <td>{i.giatrilenh}</td>
                                          <td>{i.giatritiennhantrasoat}</td>
                                          <td>{i.giatritiensautrasoat}</td>
                                          <td>{i.trangthai}</td>
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
})

module.exports = KetQuaKhopDuaKienDieuChinhNop;
