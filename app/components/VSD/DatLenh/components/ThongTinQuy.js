import React from 'react';
// import {validate} from 'app/utils/validateInput.js';
var InputComponent = require('./InputComponent.js');

class ThongTinQuy extends React.Component{
  constructor(props){
    super(props);
    var date = new Date();
    this.state = {
      // day : date.getDate(),
      // hour : date.getHours(),
      // min : date.getMinutes(),
      // sec : date.getSeconds()
      timeout:null,
      day : 0,
      hour : 0,
      min : 1,
      sec : 5,
            TenQuyMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
            ThoiGianDongSoLenhMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
            NAVPhienTruocMua:{value:null, validate:"warning", tooltip:"Không được để trống !!"},

            TenQuyBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
            ThoiGianDongSoLenhBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"},
            NAVPhienTruocBan:{value:null, validate:"warning", tooltip:"Không được để trống !!"}
    }
  }
  componentDidMount(){
    var that = this;
    this.state.timeout = setInterval(function(){
      // var date = new Date();
      // that.state.hour = date.getHours();
      // that.state.min = date.getMinutes();
      // that.state.sec = date.getSeconds();
      // that.setState(that.state);

      that.state.sec -= 1;

      if(that.state.sec === -1){
        that.state.min -= 1;
        that.state.sec = 59;
      }
      if(that.state.min === -1){
        that.state.hour -= 1;
        that.state.min = 59;
      }
      if(that.state.hour === -1){
        that.state.day -= 1;
        that.state.hour = 23;
      }
      if(that.state.day === -1){
        that.state.sec = 0;
        that.state.min=0;
        that.state.hour = 0;
        that.state.day = 0;
        clearTimeout(that.state.timeout);
      }
      that.setState(that.state);
    },1000);
  }
  componentWillUnmount() {
    // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
    // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
    clearTimeout(this.state.timeout);
    this.setState({day : 0, hour : 0, min : 0, sec : 0});
  }
  handleChange(state, e, type){
    // validate(e.target.value, type, (result)=>{
    //     if(result != null){
    //       this.setState({...this.state, [""+state]:{...this.state[""+state],value: e.target.value, validate:"warning", tooltip:result}});
    //     }else{
    //       this.setState({...this.state, [""+state]:{...this.state[""+state],value: e.target.value, validate:"success", tooltip:result}});
    //     }
    // });
      this.props.onChange(state, e, type);
  }
  render(){
    return(
      <div className={"inner55-"+this.props.type}>

            <div>
            <div className="col-xs-12">
                <label className="col-xs-11 inner55-title">Thông tin quỹ VFVMF4</label>
            </div>
            <div className="col-xs-12">
                <label className="col-xs-4">Tên quỹ</label>
                <div className="col-xs-7">
                <InputComponent placeholder="5" validate={this.props.type==="mua"?this.state.TenQuyMua.validate:this.state.TenQuyBan.validate} type="text" name={this.props.type==="mua"?"TenQuyMua":"TenQuyBan"}
                tooltip={this.props.type==="mua"?this.state.TenQuyMua.tooltip:this.state.TenQuyBan.tooltip} onChange={this.handleChange.bind(this)} />
                </div>
            </div>
            <div className="col-xs-12">
                <label className="col-xs-4">Thời gian đóng sổ lệnh</label>
                <div className="col-xs-7">
                <InputComponent placeholder="15h ngày 15/05/2017" validate={this.props.type==="mua"?this.state.ThoiGianDongSoLenhMua.validate:this.state.ThoiGianDongSoLenhBan.validate} type="text" name={this.props.type==="mua"?"ThoiGianDongSoLenhMua":"ThoiGianDongSoLenhBan"}
                tooltip={this.props.type==="mua"?this.state.ThoiGianDongSoLenhMua.tooltip:this.state.ThoiGianDongSoLenhBan.tooltip} onChange={this.handleChange.bind(this)} />
                </div>
            </div>
            <div className="col-xs-12">
                <label className="col-xs-4">NAV phiên trước</label>
                <div className="col-xs-7">
                <InputComponent placeholder="15.2345.58" validate={this.props.type==="mua"?this.state.NAVPhienTruocMua.validate:this.state.NAVPhienTruocBan.validate} type="number" name={this.props.type==="mua"?"NAVPhienTruocMua":"NAVPhienTruocBan"}
                tooltip={this.props.type==="mua"?this.state.NAVPhienTruocMua.tooltip:this.state.NAVPhienTruocBan.tooltip} onChange={this.handleChange.bind(this)} />
                </div>
            </div>
            </div>

            <div className="col-xs-12" style={{height:"41px",paddingTop:"6px"}}>
                <label className="col-xs-4">Đếm ngược :</label>
                <div className=" col-xs-7 time-countdown">
                  <div className="col-xs-3">
                    <div className="number-time-countdown">{this.state.day}</div>
                    <label>Ngày</label>
                  </div>
                  <div className="col-xs-3">
                    <div className="number-time-countdown">{this.state.hour}</div>
                    <label>Giờ</label>
                  </div>
                  <div className="col-xs-3">
                    <div className="number-time-countdown">{this.state.min}</div>
                    <label>Phút</label>
                  </div>
                  <div className="col-xs-3">
                    <div className="number-time-countdown">{this.state.sec}</div>
                    <label>Giây</label>
                  </div>
                </div>
            </div>
      </div>
    )
  }
}

module.exports = ThongTinQuy;
// <div className="countdown">
//     <h5 style={{marginLeft:"15px"}}>Đếm ngược :</h5>
//     <div className="time-countdown">
//       <div className="col-xs-3">
//         <div className="number-time-countdown">{this.state.day}</div>
//         <h5>Ngày</h5>
//       </div>
//       <div className="col-xs-3">
//         <div className="number-time-countdown">{this.state.hour}</div>
//         <h5>Giờ</h5>
//       </div>
//       <div className="col-xs-3">
//         <div className="number-time-countdown">{this.state.min}</div>
//         <h5>Phút</h5>
//       </div>
//       <div className="col-xs-3">
//         <div className="number-time-countdown">{this.state.sec}</div>
//         <h5>Giây</h5>
//       </div>
//     </div>
// </div>
