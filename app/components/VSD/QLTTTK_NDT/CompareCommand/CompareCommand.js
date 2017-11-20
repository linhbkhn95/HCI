import React from 'react';
import {connect} from 'react-redux';
import Paging from './Components/Paging';
import {Popover,OverlayTrigger,Tooltip,Button,Modal,Pagination} from 'react-bootstrap'
import ModalThongTinMonTienNop from './Components/ModalThongTinMonTienNop.js';
import FormCloseAcount from './Components/FormCompare.js';
import RowItemAcount from 'RowItemAcount';
import Tb_Account from './Components/Tb_Account.js';
import axios from 'axios';
import {showModal,search,updateNumberPage,updatePagePageSize} from 'actionCloseAccount'

import KetQuaDuKien from './Components/KetQuaKhopDuKienSauSuaDienGiai.js';
import KetQuaKhopDuKienDieuChinhNop from './Components/KetQuaKhopDuKienDieuChinhNop.js';
class CompareCommand extends React.Component {
  constructor(props) {
      super(props);

      this.state = {


          pagesize:"5",
          activePage:"1",
          showPopupThongTinMonNop:false

      };
  }
  showPopupThongTinMonNop(shtk){
    this.setState({showPopupThongTinMonNop:true});

  }
  closePopupThongTinMonNop(){
    console.log('closePopupThongTinMonNop');
    this.setState({showPopupThongTinMonNop:false});
  }
  save() {
    this.setState({ showModal: false });
    console.log('okkk fine');
  }
  selectPageSize(pagesize){
    console.log(pagesize);
    var {dispatch} =this.props;
    io.socket.post('/userindex/'+this.props.typeSearch,{pagesize:pagesize,page:1,keySearch:this.props.keySearch}, function(resData, jwres){
        console.log(resData);
         dispatch(search(resData.data));
         dispatch(updateNumberPage(resData.numPerPage));
      });
    this.props.dispatch(updatePagePageSize({page:"1",pagesize:pagesize}))


  }
  selectPage(page,pagesize) {
    console.log(page+ " "+ pagesize);
        var {dispatch} =this.props;
    io.socket.post('/userindex/'+this.props.typeSearch,{pagesize:pagesize,page:page,keySearch:this.props.keySearch}, function(resData, jwres){
        console.log(resData);
         dispatch(search(resData.data));
         dispatch(updateNumberPage(resData.numPerPage));
      });
    this.props.dispatch(updatePagePageSize({page:page,pagesize:pagesize}))
  }

  render(){
    return(
      <div>
      <div className="panel panel-default">
       <div  style={{ borderBottom: "1px solid rgba(156, 164, 179, 0.24)"}}><div  className="col-md-6 col-xs-12 title-content">ĐỐI CHIẾU LỆNH TIỀN-LỆNH ĐẶT MUA</div></div>

         <div className="panel-body">

        <FormCloseAcount  />
        <ModalThongTinMonTienNop showModal={this.state.showPopupThongTinMonNop} closeModal={this.closePopupThongTinMonNop.bind(this)}  />
        <hr />
        <Tb_Account listCustomerInfo
          showPopupThongTinMonNop={this.showPopupThongTinMonNop.bind(this)}

        />
         <Paging numPerPage={this.props.numPerPage} selectPage={this.selectPage.bind(this)} selectPageSize={this.selectPageSize.bind(this)} />
      </div>

      </div>
          <div className=" panel panel-success rows">

            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#tab1"><b>Kết quả khớp dự kiến điều chỉnh nộp tiền</b></a></li>
                <li><a data-toggle="tab" href="#tab2"> <b>Kết quả khớp dự kiến sau sửa diễn giải</b></a></li>

            </ul>

          <div className="tab-content">
            <div id="tab1" className="tab-pane fade in active">
              <KetQuaKhopDuKienDieuChinhNop />
            </div>
            <div id="tab2" className="tab-pane fade">
              <KetQuaDuKien />
            </div>


          </div>
        </div>
         <div className="fb-comments" data-href="http://localhost:1339/cmd" data-numposts="5"></div>
      </div>
    );
  }
}
module.exports = connect(function (state){
  return {listCustomerInfo: state.closeAccount.listCustomerInfo,
          infAccount:state.infAccount,
          numPerPage:state.closeAccount.numPerPage,
          typeSearch:state.closeAccount.typeSearch,
          keySearch:state.closeAccount.keySearch
  };
})(CompareCommand);
