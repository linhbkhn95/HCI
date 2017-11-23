import React from 'react';
import {connect} from 'react-redux';
import Paging from './components/Paging';
import {Popover,OverlayTrigger,Tooltip,Button,Modal,Pagination} from 'react-bootstrap'
import ModalCloseAccount from './components/ModalCloseAccount.js';
import FormCloseAcount from './components/FormCloseAcount.js';
import RowItemAcount from './components/RowItemAcount.js';
import Tb_Account from './components/Tb_Account.js';
import axios from 'axios';
import TableBootstrap from 'app/utils/TableBootstrap.js';
import Tb from 'app/utils/TablePosition.js';
import {showModal,search,updateNumberPage,updatePagePageSize} from 'actionCloseAccount'
class CloseAccount2 extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          selectedRows: new Set(),

          checked: false,
          pagesize:"5",
          activePage:"1"

      };
  }
  handleSelectedRows(selectedRow, checked) {
    console.log(selectedRow);
    console.log(checked);
    let selectedRows = this.state.selectedRows
    if (checked) {
      selectedRows.add(selectedRow)
    } else {
      selectedRows.delete(selectedRow)
    }
    this.setState({selectedRows})
  }
  removeSelected () {
     let selectedRows = this.state.selectedRows;
     selectedRows.clear();
     this.setState({checked: false, selectedRows});
  }

  checkedClick () {
    this.setState({checked: !this.state.checked})
  }

  save() {
    this.setState({ showModal: false });
    console.log('okkk fine');
  }


  render(){
    return(
      <div className="panel panel-default">
      <div className="header-border">
       <div className="title-content"><div>Yêu cầu đóng tài khoản</div></div>
      </div>
         <div className="panel-body">


        <ModalCloseAccount />
        <hr />

        <TableBootstrap  />

      </div>
      <div className="fb-comments" data-href="http://localhost:1339/repos" data-numposts="5"></div>
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
})(CloseAccount2);
