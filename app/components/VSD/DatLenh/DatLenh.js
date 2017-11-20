import React from 'react';
import {connect} from 'react-redux';
import {showModalThongTinUyQuyen,closeModalThongTinUyQuyen,showModalChiTiet} from 'actionDatLenh';
// import {validate} from 'app/utils/validateInput.js';
import {FormGroup,ControlLabel,FormControl,InputGroup,Glyphicon,Tooltip,OverlayTrigger} from 'react-bootstrap';

var ThongTinQuy = require('ThongTinQuy');
var UyQuyen = require('UyQuyen');
var ChiTiet = require('ChiTiet');
var SoDuHienCo = require('./components/SoDuHienCo.js');
var SoLenh = require('./components/SoLenh.js');
var InputComponent = require('./components/InputComponent.js');

class DatLenh extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image: {value: null, validate:"warning"},
      LoaiLenh: "hoandoi",
      haveError: false,
      SHTKGD:{value:null, validate:"warning", tooltip:"Đây là dãy số !!"},
      LoaiLenhValue:{value:"hoandoi", validate:"success"},
      MaCCQ:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      MaCCQHoanDoi:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      SanPham:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      SoLuongBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      GiaTriMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},

      TenKH:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      SoDKSH:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      NgayCap:{value:null, validate:"warning", tooltip:"Không được để trống !!"},

      TenQuyMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      ThoiGianDongSoLenhMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      NAVPhienTruocMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},

      TenQuyBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      ThoiGianDongSoLenhBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
      NAVPhienTruocBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"}
    }
  }
  handleChange (state , e, type) {
    if(type==="date"){
      validate(e, type, (result)=>{
          if(result != null){
            this.setState({...this.state, [""+state]:{...this.state[""+state],value: e, validate:"warning", tooltip:result}});
          }else{
            this.setState({...this.state, [""+state]:{...this.state[""+state],value: e, validate:"success", tooltip:result}});
          }
      });
    }else{
      validate(e.target.value, type, (result)=>{
          if(result != null){
            this.setState({...this.state, [""+state]:{...this.state[""+state],value: e.target.value, validate:"warning", tooltip:result}});
          }else{
            this.setState({...this.state, [""+state]:{...this.state[""+state],value: e.target.value, validate:"success", tooltip:result}});
          }
      });
    }
  }
  handleSubmit(event){
    var that = this;
    var err = 0;
    event.preventDefault();
    var Obj = {
      SHTKGD: this.state.SHTKGD,
      LoaiLenhValue: this.state.LoaiLenhValue,
      MaCCQ: this.state.MaCCQ,
      MaCCQHoanDoi: this.state.MaCCQHoanDoi,
      GiaTriMua: this.state.GiaTriMua,
      SoLuongBan: this.state.SoLuongBan,
      PhiDuKien: this.refs.PhiDuKien.value,
      SanPhamTop: this.refs.SanPhamTop.value,
      SanPhamBot: this.refs.SanPhamBot.value,

      FileAnhCMT: this.state.image,
      TenKH: this.state.TenKH,
      SoDKSH: this.state.SoDKSH,
      NgayCap: this.state.NgayCap,
      TenQuyMua: this.state.TenQuyMua,
      ThoiGianDongSoLenhMua: this.state.ThoiGianDongSoLenhMua,
      NAVPhienTruocMua: this.state.NAVPhienTruocMua,
      TenQuyBan: this.state.TenQuyBan,
      ThoiGianDongSoLenhBan: this.state.ThoiGianDongSoLenhBan,
      NAVPhienTruocBan: this.state.NAVPhienTruocBan
    };
    console.log(Obj);
    for( var property in Obj){
      var value = Obj[property];
      if(value.validate && value.validate === "warning"){
        err ++;
      }
    }
    if(err>0){
      alert("Vui lòng nhập đúng các yêu cầu!!!");
    }else{
      io.socket.post('/user/submitDatLenh',Obj, function(resData, jwres){
          console.log(resData);
          alert("Đã submit thành công dữ liệu");
        });
    }
  }
  handleFileUpload(event){
    var that = this;
    var typeImage = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/x-png', 'image/png', 'image/svg+xml'];
    if (event.target.files && event.target.files[0]) {
      typeImage.forEach(function(item){
        if(item === event.target.files[0].type){
          let reader = new FileReader();
          reader.onload = (e) => {
            that.state.image.value = e.target.result;
            that.state.image.validate = "success";
              that.setState(that.state);
          }
          reader.readAsDataURL(event.target.files[0]);
        }
      })
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
  changeLoaiLenh(e){
    var loaiLenh = e.target.value;
    this.state.LoaiLenh = loaiLenh;
    this.setState(this.state);
  }
  deleError(e){
  }
  render(){

    var that = this;
    var {LoaiLenh} = this.state;
    var renderGiaTriMuaSLBan = null;
    var renderFileAnhCMT = null;
    if(this.state.image.validate === "warning"){
        renderFileAnhCMT = <span className="glyphicon glyphicon-remove pull-right"></span>;
    }else{
      renderFileAnhCMT = <span className="glyphicon glyphicon-ok pull-right"></span>;
    }
    if(LoaiLenh === "hoandoi"){
        renderGiaTriMuaSLBan = <div>
        <div className="col-xs-12">
            <h5 className="col-xs-5">Giá trị mua</h5>
            <div className="col-xs-7">
            <InputComponent placeholder="500.000" validate={this.state.GiaTriMua.validate} type="number" name="GiaTriMua"
            tooltip={this.state.GiaTriMua.tooltip} onChange={this.handleChange.bind(this)} />
            </div>
        </div>
        <div className="col-xs-12">
            <h5 className="col-xs-5">Số lượng bán</h5>
            <div className="col-xs-4">
            <InputComponent placeholder="5" validate={this.state.SoLuongBan.validate} type="number" name="SoLuongBan"
            tooltip={this.state.SoLuongBan.tooltip} onChange={this.handleChange.bind(this)} />
            </div>
            <input type="button" className="btn btn-info" id="inner45-btn" defaultValue="Chi tiết" onClick={this.ModalChiTiet.bind(this)} />
        </div>
        </div>;
    }else if(LoaiLenh === "mua"){
      renderGiaTriMuaSLBan =
      <div className="col-xs-12">
          <h5 className="col-xs-5">Giá trị mua</h5>
          <div className="col-xs-7">
          <InputComponent placeholder="500.000" validate={this.state.GiaTriMua.validate} type="number" name="GiaTriMua"
          tooltip={this.state.GiaTriMua.tooltip} onChange={this.handleChange.bind(this)} />
          </div>
      </div>
    }else{
      renderGiaTriMuaSLBan =
      <div className="col-xs-12">
          <h5 className="col-xs-5">Số lượng bán</h5>
          <div className="col-xs-4">
          <InputComponent placeholder="5" validate={this.state.SoLuongBan.validate} type="number" name="SoLuongBan"
          tooltip={this.state.SoLuongBan.tooltip} onChange={this.handleChange.bind(this)} />
          </div>
          <input type="button" className="btn btn-info" id="inner45-btn" defaultValue="Chi tiết" onClick={this.ModalChiTiet.bind(this)} />
      </div>
    }
    var renderThongTinQuy = LoaiLenh === "hoandoi" ?
    <div><ThongTinQuy onChange={this.handleChange.bind(this)} type="mua"/><ThongTinQuy onChange={this.handleChange.bind(this)} type="ban"/></div>
    :<ThongTinQuy onChange={this.handleChange.bind(this)} type={LoaiLenh} />;


    return(
      <div className="container panel panel-success">
          <div className="title-content">Đặt lệnh</div>

          <form  method="POST" action="#">
          <div className="inner panel panel-success">

              <div className="inner45">
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Số hiệu TKGD</h5>
                      <div className="col-xs-7 ">

                        <InputComponent placeholder="90123812381208" validate={this.state.SHTKGD.validate} type="number" name="SHTKGD"
                        tooltip={this.state.SHTKGD.tooltip} onChange={this.handleChange.bind(this)} />

                      </div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Loại lệnh</h5>
                      <div className="col-xs-7 ">
                        <FormControl type="select" componentClass="select"  onChange={this.changeLoaiLenh.bind(this)} >
                          <option value="hoandoi">Hoán đổi</option>
                          <option value="mua">Mua</option>
                          <option value="ban">Bán</option>
                        </FormControl>


                      </div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Mã CCQ</h5>
                      <div className="col-xs-7 ">
                      <InputComponent placeholder="VFMVF1" validate={this.state.MaCCQ.validate} type="text" name="MaCCQ"
                      tooltip={this.state.MaCCQ.tooltip} onChange={this.handleChange.bind(this)} />
                      </div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Sản phẩm</h5>
                      <div className="col-xs-7 ">
                          <select className="form-control" ref="SanPhamTop">
                            <option>Thông thường </option>
                            <option>Gì gì đó </option>
                          </select>
                      </div>
                  </div>

                  {renderGiaTriMuaSLBan}

                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Phí dự kiến</h5>
                      <div className="col-xs-7"><input ref="PhiDuKien" onClick={this.deleError.bind(this,"PhiDuKien")} className="form-control" disabled defaultValue="100.000"/></div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Mã CCQ hoán đổi</h5>
                      <div className="col-xs-7">
                      <InputComponent placeholder="VFMVF1" validate={this.state.MaCCQHoanDoi.validate} type="text" name="MaCCQHoanDoi"
                      tooltip={this.state.MaCCQHoanDoi.tooltip} onChange={this.handleChange.bind(this)} />
                      </div>
                  </div>
                  <div className="col-xs-12">
                      <h5 className="col-xs-5">Sản phẩm</h5>
                      <div className="col-xs-7 ">
                          <select className="form-control" disabled ref="SanPhamBot">
                            <option>Thông thường </option>
                            <option>Gì gì đó </option>
                          </select>
                      </div>
                  </div>
                  <div className="col-xs-12">
                      <input type="reset" className="col-xs-offset-1 col-xs-3 btn btn-primary inner45-btn" defaultValue="Làm mới" />
                      <input type="button" onClick={this.handleSubmit.bind(this)} className="col-xs-3 btn btn-success inner45-btn" defaultValue="Thực hiện" />
                  </div>
              </div>

              <div className="inner55">

                  <div className="inner55-default">
                      <div className="col-xs-12">
                        <div className="col-xs-8">
                          <div className="col-xs-12">
                              <h5 className="col-xs-5">Tên KH</h5>
                              <div className="col-xs-6 col-xs-offset-1">
                              <InputComponent placeholder="Nguyen Van A" validate={this.state.TenKH.validate} type="text" name="TenKH"
                              tooltip={this.state.TenKH.tooltip} onChange={this.handleChange.bind(this)} />
                              </div>
                          </div>

                          <div className="col-xs-12">
                              <h5 className="col-xs-5">Số ĐKSH</h5>
                              <div className="col-xs-6 col-xs-offset-1">
                              <InputComponent placeholder="321321231231" validate={this.state.SoDKSH.validate} type="number" name="SoDKSH"
                              tooltip={this.state.SoDKSH.tooltip} onChange={this.handleChange.bind(this)} />
                              </div>
                          </div>
                          <div className="col-xs-12">
                              <h5 className="col-xs-5">Ngày cấp</h5>
                              <div className="col-xs-6 col-xs-offset-1">
                              <InputComponent placeholder="12/12/2017" validate={this.state.NgayCap.validate} type="date" name="NgayCap"
                              tooltip={this.state.NgayCap.tooltip} onChange={this.handleChange.bind(this)} />
                              </div>
                          </div>
                        </div>
                        <div className="col-xs-4">
                          <input type="button" style={{width:"100%",height:"63px"}} className="btn btn-primary" onClick={this.ThongTinUyQuyen.bind(this)} defaultValue="Thông tin ủy quyền" />

                          <label style={{width:"100%",marginTop:"1px"}} className="btn btn-primary">File Ảnh CMT
                          <input ref="FileAnhCMT" name="FileAnhCMT" onChange={this.handleFileUpload.bind(this)} type="file" style={{width:"100%",marginTop:"1px"}} className="inputfile" />
                            {renderFileAnhCMT}
                          </label>
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
})(DatLenh);
