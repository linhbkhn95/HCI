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

       ],
       listRow:[

               {shtk:"009C123456",maccq:"",loailenh:"",giatrilenh:"45000",sotiennop:"15000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6000",sotienthieu:"5100",parent:true},
               {shtk:"009C123456",maccq:"VF1",loailenh:"Thường",giatrilenh:"10000",sotiennop:"5000",diengiai:"Thường",sochungtu:"000001",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123456",maccq:"VF1",loailenh:"Sip.Flex",giatrilenh:"15000",sotiennop:"5000",diengiai:"009C123456 - Mua VF1",sochungtu:"00002",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123456",maccq:"VF1",loailenh:"SW",giatrilenh:"20000",sotiennop:"5000",diengiai:"SW",sochungtu:"",sotiendenghi:"11110",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123457",maccq:"",loailenh:"",giatrilenh:"45000",sotiennop:"15000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6000",sotienthieu:"5100",parent:true},
               {shtk:"009C123457",maccq:"VF1",loailenh:"Thường",giatrilenh:"10000",sotiennop:"5000",diengiai:"Thường",sochungtu:"000001",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123457",maccq:"VF1",loailenh:"Sip.Flex",giatrilenh:"15000",sotiennop:"5000",diengiai:"Sip.Plex",sochungtu:"00002",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123457",maccq:"VF1",loailenh:"SW",giatrilenh:"20000",sotiennop:"5000",diengiai:"SW",sochungtu:"",sotiendenghi:"11110",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123458",maccq:"",loailenh:"",giatrilenh:"45000",sotiennop:"15000",diengiai:"",sochungtu:"",sotiendenghi:"",trangthai:"Không khớp",sotienthua:"6000",sotienthieu:"5100",parent:true},
               {shtk:"009C123458",maccq:"VF1",loailenh:"Thường",giatrilenh:"10000",sotiennop:"5000",diengiai:"Thường",sochungtu:"000001",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123458",maccq:"VF1",loailenh:"Sip.Flex",giatrilenh:"15000",sotiennop:"5000",diengiai:"Sip.Plex",sochungtu:"00002",sotiendenghi:"",trangthai:"",sotienthua:"",sotienthieu:""},
               {shtk:"009C123458",maccq:"VF1",loailenh:"SW",giatrilenh:"20000",sotiennop:"5000",diengiai:"SW",sochungtu:"",sotiendenghi:"11110",trangthai:"",sotienthua:"",sotienthieu:""}

       ],
       selectedRows: {
                     shtk009C123456:'none'


       }
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
        var that =this;
          console.log('getAll_CompareCmd');
         axios.post('/comparecomm/getAll',{pagesize:20,page:1})
         .then(function(res){
             console.log('getAll_CompareCmd');
            console.log(res.data);
            that.setState({listRow:res.data.data});
            //  dispatch(search(res.data.data));
            //  dispatch(updateNumberPage(res.data.numPerPage));
      });

        // axios.get('user/getAll_AcountClose')
        //   .then(res => {
        //      console.log(res.data);
        //      dispatch(search(res.data));
        //      console.log('res.data');
        //    })
        //   .catch(err => console.log(err));


  },
  showRowsDetail(shtk){
      if(this.state.selectedRows['shtk'+shtk]==='none'){
          this.state.selectedRows['shtk'+shtk]='';
         this.setState({selectedRows:this.state.selectedRows});
       }
       else{
         this.state.selectedRows['shtk'+shtk]='none';
        this.setState({selectedRows:this.state.selectedRows});
       }
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
    if(this.state.listRow!=null&&this.state.listRow.length>0){
    return this.state.listRow.map((customer,index) => {

           return(


               <RowItemAcount
                showPopup={that.props.showPopupThongTinMonNop}
                showRowsDetail={that.showRowsDetail.bind(that)}
                showDetail={that.state.selectedRows['shtk'+customer.shtk]}
                key={index}
                parent={customer.parent}
                shtk={customer.shtk}
                maccq={customer.maccq}
                loailenh={customer.loailenh}
                giatrilenh={customer.giatrilenh}
                sotiennop={customer.sotiennop}
                diengiai={customer.diengiai}
                sochungtu ={customer.sochungtu}
                sotiendenghi={customer.sotiendenghi}
                trangthai ={customer.tranthai}
                sotienthua ={customer.sotienthua}
                sotienthieu={customer.sotienthieu}
                listdetail={customer.listdetail}
              />


          )




     })
   }

   },
   render(){

      return(
        <div className="rows col-xs-12">
  <Table style={{fontSize:"12px"}} striped bordered condensed hover responsive>
          <thead>
            <tr className="success  ">
              <th  rowSpan="2"></th>
              <th className="th-group" style={{backgroundColor: "rgba(240, 173, 78, 0.69)"}}  colSpan="4" >Lệnh </th>
              <th className="th-group" style={{backgroundColor:"rgb(196, 213, 228)"}} colSpan="4" >Tiền</th>
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

            {this.renderList()}


        </Table>

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
