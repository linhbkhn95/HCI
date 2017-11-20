import React from 'react';
import RowItemAcount from './RowItemAcount';
import {connect} from 'react-redux';
import axios from 'axios';
import { Table, Pagination } from "react-bootstrap";
import {search,updateNumberPage} from 'actionCloseAccount';
var Tb_Account= React.createClass({
  getInitialState(){
    return{
       listCustomerInfo:[
            {
              isShowDetail:false,
              item:{shtk:"22a2",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
              listdetail:[
                {shtk:"22a2",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
                {shtk:"22a2",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
              ]

            },
            {
              isShowDetail:true,
              item:{shtk:"22g3",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
              listdetail:[
                {shtk:"22g3",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""}

              ]
            }

       ]
    }
  },
  // {
  //   shtk:"224",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""
  // },
  // {
  //   shtk:"225",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""
  // },
  // {
  //   shtk:"226",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""
  // },
  // {
  //   shtk:"227",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""
  // },
  // {
  //   shtk:"228",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""
  // },
  // {
  //   shtk:"229",maccq:"1",loailenh:"1",giatrilenh:"",sotiennop:"5000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""
  // },
  componentDidMount(){

        var {dispatch} = this.props;

         axios.post('/userindex/getAll',{pagesize:5,page:1})
         .then(function(res){
             console.log('getAll_AcountClose');
            console.log(res.data);
             dispatch(search(res.data.data));
             dispatch(updateNumberPage(res.data.numPerPage));
      });

        // axios.get('user/getAll_AcountClose')
        //   .then(res => {
        //      console.log(res.data);
        //      dispatch(search(res.data));
        //      console.log('res.data');
        //    })
        //   .catch(err => console.log(err));


  },

  renderListDetail(listItem){
    console.log(listItem);
    if (listItem==="undefind"||listItem.length===0) {

       return null;


     } else {
       console.log('renderListDetail');
         return(
           listItem.map(function(item,index){
 console.log(item);
           return(
             <tr>


               <td>{item.shtk}</td>
               <td>{item.shtk}</td>
               <td>{item.maccq}</td>
               <td>{item.loailenh}</td>
               <td>{item.giatrilenh}</td>
              <td>{item.sotiennop}</td>
               <td>{item.diengiai}</td>
              <td>{item.sochungtu}</td>
              <td>{item.sotiendenghi}</td>
            <td>{item.tranthai}</td>
              <td>{item.sotienthua}</td>
               <td>{item.sotienthieu}</td>

             </tr>
             )
           })

     )
   }
 },
  renderList(){
    console.log('cmm');
    var that=this;
   return this.state.listCustomerInfo.map((customer,index) => {




                 if(index==0){
                   return(
                   < table className="table table-responsive table-hover">
                    <thead>
                     <tr className="success  ">
                       <th  rowSpan="2"></th>
                       <th className="th-group" style={{backgroundColor: "rgba(240, 173, 78, 0.69)"}}  colSpan="4" >Lệnh </th>
                       <th className="th-group" style={{backgroundColor:"#c4eae3"}} colSpan="4" >Tiền</th>
                       <th className="th-group" style={{backgroundColor:"rgb(243, 215, 187)"}} colSpan="3" >Trạng thái</th>

                     </tr>
                     <tr className="th-item">

                       <th className="th-item-lenh">Số hiệu TKGD</th>
                       <th className="th-item-lenh">Mã CCQ</th>
                       <th className="th-item-lenh">Loại lệnh</th>
                       <th className="th-item-lenh">Giá trị lệnh</th>
                       <th className="th-item-tien">Số tiền nộp</th>
                       <th className="th-item-tien">Diễn giải</th>
                       <th className="th-item-tien">Số chứng từ</th>
                       <th className="th-item-tien">Số tiền đề nghị tra soát</th>
                       <th className="th-item-trangthai">Trạng thái đối chiếu</th>
                       <th className="th-item-trangthai">Số tiền thừa</th>
                       <th className="th-item-trangthai">Số tiền thiếu</th>
                    </tr>
                   </thead>

                                   <tbody>
                                    <RowItemAcount


                                     key={index}
                                     shtk={customer.item.shtk}
                                     maccq={customer.item.maccq}
                                     loailenh={customer.item.loailenh}
                                     giatrilenh={customer.item.giatrilenh}
                                     sotiennop={customer.item.sotiennop}
                                     diengiai={customer.item.diengiai}
                                     sochungtu ={customer.item.sochungtu}
                                     sotiendenghi={customer.item.sotiendenghi}
                                     trangthai ={customer.item.tranthai}
                                     sotienthua ={customer.item.sotienthua}
                                     sotienthieu={customer.item.sotienthieu}
                                     listdetail={customer.item.listdetail}
                                     />
                                     </tbody>

                                 <tbody id={customer.item.shtk} className="collapse" >
                                   {that.renderListDetail(customer.listdetail)}
                                 </tbody>
                         </table>)
                }
                else{
                  return(
                    < table className="table table-responsive table-hover">

                    <thead>
                     <tr className="success  ">
                       <th  rowSpan="2"></th>
                       <th className="th-group" style={{backgroundColor: "rgba(240, 173, 78, 0.69)"}}  colSpan="4" > </th>
                       <th className="th-group" style={{backgroundColor:"#c4eae3"}} colSpan="4" ></th>
                       <th className="th-group" style={{backgroundColor:"rgb(243, 215, 187)"}} colSpan="3" > </th>

                     </tr>
                     <tr className="th-item">

                       <th className="th-item-lenh">Số hiệu TKGD</th>
                       <th className="th-item-lenh">Mã CCQ</th>
                       <th className="th-item-lenh">Loại lệnh</th>
                       <th className="th-item-lenh">Giá trị lệnh</th>
                       <th className="th-item-tien">Số tiền nộp</th>
                       <th className="th-item-tien">Diễn giải</th>
                       <th className="th-item-tien">Số chứng từ</th>
                       <th className="th-item-tien">Số tiền đề nghị tra soát</th>
                       <th className="th-item-trangthai">Trạng thái đối chiếu</th>
                       <th className="th-item-trangthai">Số tiền thừa</th>
                       <th className="th-item-trangthai">Số tiền thiếu</th>
                    </tr>
                   </thead>
                                    <tbody>
                                     <RowItemAcount


                                      key={index}
                                      shtk={customer.item.shtk}
                                      maccq={customer.item.maccq}
                                      loailenh={customer.item.loailenh}
                                      giatrilenh={customer.item.giatrilenh}
                                      sotiennop={customer.item.sotiennop}
                                      diengiai={customer.item.diengiai}
                                      sochungtu ={customer.item.sochungtu}
                                      sotiendenghi={customer.item.sotiendenghi}
                                      trangthai ={customer.item.tranthai}
                                      sotienthua ={customer.item.sotienthua}
                                      sotienthieu={customer.item.sotienthieu}
                                      listdetail={customer.item.listdetail}
                                      />
                                      </tbody>

                                  <tbody id={customer.item.shtk} className="collapse" >
                                    {that.renderListDetail(customer.listdetail)}
                                  </tbody>
                          </table>)

                }








     })
   },
   render(){
      return(
        <div className="rows col-xs-12">
              {this.renderList()}
        </div>
      )
   }
});
module.exports = connect(function(state){
   return{}
})(Tb_Account);
// <tbody className="tbody-doichieulenh">
//  {this.renderList()}
// </tbody>
