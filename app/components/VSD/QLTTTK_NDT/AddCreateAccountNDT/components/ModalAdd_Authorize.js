import React from 'react';
import {Popover,OverlayTrigger,Tooltip,Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux';
import {closeModalAddAccount} from 'actionAddAccount';
import axios from 'axios';
var ModalAdd_Authorize = React.createClass({
  getInitialState(){
    return{
      dataModal:{...this.props.dataModal},
      disable:"disable"
    }
  },

  access(){
      var {dispatch,textBtn} = this.props;
      var {ten,diachi,socmtnd,noicap,ngaycap,ngayHieuLuc,ngayHetHieuLuc}=this.refs;
      var data={
                ten:ten.value,
                cmtnd:socmtnd.value,

                ngaycap:ngaycap.value,
                noicap:noicap.value,
                diachi:diachi.value,


                ngayHieuLuc:ngayHieuLuc.value,
                ngayHetHieuLuc:ngayHetHieuLuc.value,
                phamviUyQuyen:"admin"
            }
        var that =this;
        axios.post('Authorize/accessAddUpdate',{data:data,textBtn:textBtn})
         .then(function(res){
              console.log(res.data);
            //  that.props.fetchData();
            //  console.log(TenNguoiDuocUQ.value );

         });

       dispatch(closeModalAddAccount());
  },
  close(){
            this.props.dispatch(closeModalAddAccount());
  },
  // componentDidMount(){
  //        var dataModal= {...this.props.dataModal};
  //        console.log(dataModal);
  //        this.setState({dataModal:dataModal});
  //
  // },
  render() {

    var dataModal= {...this.props.dataModal};
    if(dataModal===null||dataModal==="undefined"){
      dataModal={
  			          cmtnd:" ",
  								ngaycap:" ",
  								noicap:"",
  								ten:"",
  								diachi:"",
                  ngayHieuLuc:"",
                  ngayHetHieuLuc:""
  							}

    }

  // var dataModal= {...this.props.dataModal};
  // console.log(dataModal);
  // this.setState({dataModal:dataModal});
    return (



         <Modal show={this.props.showModal} onHide={this.close}>
          <div>
          <Modal.Header closeButton>
              <Modal.Title><div className="title-content">Thông tin được ủy quyền</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                dấdasdasdasdasdadadasdadadaaaaaaaaaaaaaaa
                <div><label>ok</label>
                <div className="col-xs-12 rows">
                    <h5 className="col-xs-3">Tên người được UQ </h5>
                    <div className="col-xs-6 item-form"><input className="form-control" ref="ten" defaultValue={dataModal.ten}  disabled={this.props.disabled} type="text"  required/></div>
                </div>

                </div>

             <div>


              <div className="col-xs-12 rows">
                  <h5 className="col-xs-3">Số CMTND </h5>
                  <div className="col-xs-6 item-form"><input className="form-control" ref="socmtnd" defaultValue={dataModal.cmtnd}  disabled={this.props.disabled} type="text"   required /></div>
              </div>
              <div className="col-xs-12 rows">
                  <h5 className="col-xs-3">Ngày cấp</h5>
                  <div className="col-xs-6 item-form"><input className="form-control" ref="ngaycap" type="text" defaultValue={dataModal.ngaycap}  disabled={this.props.disabled}  /></div>
              </div>
              <div className="col-xs-12 rows">
                  <h5 className="col-xs-3">Nơi cấp</h5>
                  <div className="col-xs-6 item-form"><input className="form-control" ref="noicap" type="text" defaultValue={dataModal.noicap}    disabled={this.props.disabled}/></div>
              </div>
              <div className="col-xs-12 rows">
                  <h5 className="col-xs-3">Địa chỉ</h5>
                  <div className="col-xs-6 item-form"><input className="form-control" ref="diachi" type="text" defaultValue={dataModal.diachi}   disabled={this.props.disabled}  /></div>
              </div>
              <div className="col-xs-12 rows">
                  <h5 className="item-text">Ngày hiệu lực</h5>
                  <div className="col-xs-12 item-form"><input className="form-control" defaultValue={dataModal.ngayHieuLuc} ref="ngayHieuLuc" type="text" placeholder="DD/MM/YYYY" /></div>
                  <h5 className="item-text rows">Ngày hết hiệu lực</h5>
                  <div className="col-xs-12 item-form"><input className="form-control" defaultValue={dataModal.ngayHetHieuLuc} ref="ngayHetHieuLuc" type="text" placeholder="DD/MM/YYYY" /></div>
              </div>
              <div className="col-xs-12">
                  <b className="col-xs-12 rows">Phạm vi ủy quyền</b>
                  <p className="col-xs-5"><input  type="checkbox" />All</p>
                  <p className="col-xs-5"><input  type="checkbox" />Đặt/ Hủy/ Sửa lệnh</p>
                  <p className="col-xs-5"><input  type="checkbox" />Chuyển khoản</p>
                  <p className="col-xs-5"><input  type="checkbox" />Điều chỉnh thông tin</p>
              </div>
           </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.access}>{this.props.textBtn}</Button>

          </Modal.Footer>
          </div>
        </Modal>


    );
  }
});
module.exports = connect(function(state){
  return{
      showModal:state.addAccount.authorize.showModalAddAccount,
      textBtn:state.addAccount.authorize.textBtn,
      dataModal:state.addAccount.authorize.dataModal,
      disabled:state.addAccount.authorize.disabled
  }
})(ModalAdd_Authorize);
