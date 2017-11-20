import React from 'react';

module.exports = class GeneralInformation extends React.Component{
  constructor(props){
    super(props);
    this.state = { urlImg: "images/cmt.jpg" }
  }
  render(){
    return (
      <div className="thongtinchung">
          <div className="col-xs-12">
                <h5 className="col-xs-1">Mã ĐLPP</h5>
                <div className="col-xs-2">
                  <input className="form-control" type="text"/>
                </div>
                <h5 className="col-xs-1">Số hiệu TKGD</h5>
                <div className="col-xs-2">
                  <input className="form-control" type="text"/>
                </div>
                <h5 className="col-xs-1">Loại TK</h5>
                <div className="col-xs-2">
                <select className="form-control">
                  <option>Ký danh / TT</option>
                  <option>Pending</option>
                  <option>Ready</option>
                </select>
                </div>

              <div className="col-xs-12">
                <h5 className="col-xs-1">Quỹ ĐK</h5>
                <div className="col-xs-2">
                    <input type="button" className="btn btn-primary" style={{width:"100%",height:"27px"}} data-toggle="modal" data-target="#myModal" value="..." />
                </div>
                <h5 className="col-xs-1"></h5>
                <div className="col-xs-6" style={{width:"47.2%"}}>
                    <input type="text" disabled="disabled" className="form-control" placeholder="Các quỹ đã đăng kí" />
                </div>
              </div>
          </div>

          <div className="thongtinchung">
            <p className="col-xs-12" style={{textAlign:"center"}}><b>Thông tin định danh<hr /></b></p>
            <div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Phân loại KH</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" disabled placeholder="Cá nhân" /></div>
                    <h5 className="col-xs-1">Loại KH</h5>
                    <div className="col-xs-2 "><input className="form-control" type="text" disabled placeholder="Trong nước" /></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Họ</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" placeholder="Nguyễn" /></div>
                    <h5 className="col-xs-1">Tên đệm</h5>
                    <div className="col-xs-2 "><input className="form-control" type="text" placeholder="Văn" /></div>
                    <h5 className="col-xs-1">Tên</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" placeholder="A" /></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Giới tính</h5>
                    <div className="col-xs-2">
                        <select className="form-control">
                          <option>Nam/Nữ</option>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                    </div>
                    <h5 className="col-xs-1">Ngày sinh</h5>
                    <div className="col-xs-2 "><input className="form-control" type="date" placeholder="dd/mm/yyyy" /></div>
                    <h5 className="col-xs-1">Quốc tịch</h5>
                    <div className="col-xs-2">
                        <select className="form-control">
                          <option>Việt Nam</option>
                          <option>Lào</option>
                          <option>Canada</option>
                        </select>
                    </div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Loại ĐKSH</h5>
                    <div className="col-xs-2">
                        <select className="form-control">
                          <option>CMT/Passport</option>
                          <option>Something</option>
                        </select>
                    </div>
                    <h5 className="col-xs-1">Số ĐKSH</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" placeholder="number" /></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Ngày cấp</h5>
                    <div className="col-xs-2"><input className="form-control" type="date" placeholder="dd/mm/yyyy" /></div>
                    <h5 className="col-xs-1">Nơi cấp</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" placeholder="text" /></div>
                    <h5 className="col-xs-1">Hết hạn</h5>
                    <div className="col-xs-2"><input className="form-control" type="date" placeholder="dd/mm/yyyy" /></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">MST</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" placeholder="text" /></div>
                </div>
            </div>

            <p className="col-xs-12" style={{textAlign:"center"}}><b>Thông tin liên hệ<hr /></b></p>
            <div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Số ĐT liên hệ</h5>
                    <div className="col-xs-2"><input className="form-control" type="text"  placeholder="SĐT" /></div>
                    <h5 className="col-xs-1">Email</h5>
                    <div className="col-xs-2 "><input className="form-control" type="email"  placeholder="email" /></div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Địa chỉ liên hệ</h5>
                    <div className="col-xs-6" style={{width:"47.2%"}}><input className="form-control" type="text"  placeholder="text" /></div>
                    <h5 className="col-xs-1">Địa chỉ thường trú</h5>
                    <div className="col-xs-2"><input className="form-control" type="text"  placeholder="text" /></div>
                </div>
            </div>

            <p className="col-xs-12" style={{textAlign:"center"}}><b>Thông tin TKNH<hr /></b></p>
            <div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Số TKNH</h5>
                    <div className="col-xs-2"><input className="form-control" type="text"  placeholder="SĐT" /></div>
                    <h5 className="col-xs-1">Tên NH</h5>
                    <div className="col-xs-2 ">
                      <select className="form-control">
                          <option>Tên NH</option>
                      </select>
                    </div>
                </div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Tên chủ TK</h5>
                    <div className="col-xs-2"><input className="form-control" type="text" disabled  placeholder="Nguyễn Văn A" /></div>
                    <h5 className="col-xs-1">Chi nhánh </h5>
                    <div className="col-xs-2"><input className="form-control" type="text"  placeholder="text" /></div>
                </div>
            </div>

            <p className="col-xs-12" style={{textAlign:"center"}}><b>Thông tin đăng ký ủy quyền và FATCA<hr /></b></p>
            <div>
                <div className="col-xs-12">
                    <h5 className="col-xs-1">Có Ủy quyền?</h5>
                    <div className="col-xs-2"><input className="form-control" style={{width:"20%"}} type="checkbox" /></div>
                    <h5 className="col-xs-1">Có FATCA?</h5>
                    <div className="col-xs-2"><input className="form-control" style={{width:"20%"}} type="checkbox" /></div>
                </div>
                <div className="col-xs-12">
                    <div className="panel panel-success img-cmt">
                        Hiển thị file ảnh CMT lúc mới duyệt thay đổi ảnh nếu có ảnh CMT mới <br />
                        HIển thị file ảnh CMT lúc duyệt mở mới
                    </div>
                </div>
                <div className="col-xs-12">
                    <button className="btn btn-danger "><span className="glyphicon glyphicon-remove"></span>Thoát</button>
                    <button className="btn btn-success "><span className="glyphicon glyphicon-check"></span>Chấp nhận</button>
                    <button className="btn btn-primary "><span className="glyphicon glyphicon-edit"></span>Ghi</button>
                </div>
            </div>

          </div>


          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Quỹ đăng ký</h4>
                </div>
                <div className="modal-body">
                  <p>Danh sách các quỹ đăng ký</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
