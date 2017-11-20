import React from 'react';
import RowItemAcount from 'RowItemAcount';
import {connect} from 'react-redux';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {search,updateNumberPage} from 'actionCloseAccount';
var Tb_Account= React.createClass({
  componentDidMount(){

        var {dispatch} = this.props;

         axios.post('/userindex/getAll',{pagesize:5,page:1})
         .then(function(res){
             console.log('getAll_AcountClose');
            console.log(res.data);
             dispatch(search(res.data.data));
             dispatch(updateNumberPage(res.data.numPerPage));
      })
       .catch(function(err){
             localStorage.removeItem('jwToken');
       })

        // axios.get('user/getAll_AcountClose')
        //   .then(res => {
        //      console.log(res.data);
        //      dispatch(search(res.data));
        //      console.log('res.data');
        //    })
        //   .catch(err => console.log(err));


  },
  renderList(){
    console.log('cmm');
   return this.props.listCustomerInfo.map(customer => {
        return (
          <RowItemAcount



            shtk={customer.shtk}
            sodksh={customer.sodksh}
          
            key={customer.id}
            id={customer.id}
            ten={customer.ten}
            diengiai ={customer.diengiai}
            trangthai={customer.trangthai}
            ngaycap ={customer.ngaycap}
            noicap ={customer.noicap}

          />
        )
     })
   },
   render(){
      return(
         <Table responsive>
          <thead>
            <tr  className="primary">

              <th>Số hiệu TKGD</th>
              <th>Tên khách hàng</th>
              <th>Số ĐKSH</th>
              <th>Ngày cấp</th>
              <th>Nơi cấp</th>
              <th>Diễn giải</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
                {this.renderList()}
          </tbody>
        </Table>
      )
   }
});
module.exports = connect(function(state){
   return{}
})(Tb_Account);
