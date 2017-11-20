import React from 'react';
var ModalAdd_Authorize  = require('./ModalAdd_Authorize');
import {connect} from 'react-redux';
import axios from 'axios';
import { Table, Pagination } from "react-bootstrap";
var Dialog = require('./Dialog');
 import { ToastContainer, toast } from 'react-toastify';
   import 'react-toastify/dist/ReactToastify.min.css';
import {showModalAddAccount,showModalEditAccount} from 'actionAddAccount';

// io.socket.on('authorize', function (event){
//   var created='created';
//     switch (event.verb) {
//       created:
//         // This is where code that handles this socket event should go.
//         // (e.g. to update the user interface)
//           console.log(event);
//         // => see below for the contents of `event`
//         break;
//       default:
//         console.warn('Unrecognized socket event (`%s`) from server:',event.verb, event);
//     }
// });
 class UyQuyenInformation extends React.Component{

  addAccount(){
    var {dispatch} = this.props;
    dispatch(showModalAddAccount());
  }
  editAdccount(){
    var {dispatch} = this.props;
    axios.post('authorize/get',{cmtnd:this.state.idClick})
      .then(res => {
         console.log('edit');
         console.log(res.data);
         dispatch(showModalEditAccount(res.data));

       })
      .catch(err => console.log(err));

  }
  fetchData(){
    var that =this;
    // axios.post('authorize/getAll',{page:this.state.activePage,pagesize:this.refs.pagesize.value})
    // .then(function(res){
    //       console.log(res.data);
    //       that.setState({data:res.data.data,numPerPage:res.data.numOfPages});
    // })
    io.socket.post('/authorize/getAll',{page:this.state.activePage,pagesize:this.refs.pagesize.value},function (resData, jwres){

          if(jwres.statusCode=="200"){
                console.log(resData);
                that.setState({data:resData.data,numPerPage:resData.numOfPages});

          }
          else{
            console.log("lỗi fetchData ủy quyền");
          }


    })
  }
  delete(){
    console.log('fetchData');
    var that =this;
     axios.post('authorize/destroy',{cmtnd:this.state.idClick})
    .then(function(res){

       that.setState({showDiaLog:false});
       that.fetchData();
//      this.setState({activePage: eventKey,data:res.data.doc,numPerPage:res.data.numOfPages});

    })
    .catch(function(err){
        console.log(err);
    })
  }
  closeDialog(){
      this.setState({showDiaLog:false});
  }
  showDiaLog(){
    this.setState({showDiaLog:true});
  }

  clickRow(soCMTND){
    console.log(soCMTND);
    this.setState({idClick:soCMTND});
  }
  render(){
    var that =this;

    return(
        <div>
          <div className="col-xs-12">
              <button onClick={this.addAccount.bind(this)} className="btn btn-primary btn-customer" ><span className="glyphicon glyphicon-plus-sign"></span> Thêm</button>
              <button onClick={this.editAdccount.bind(this)} className="btn btn-success btn-customer" ><span className="glyphicon glyphicon-pencil"></span> Sửa</button>
              <button onClick={this.showDiaLog.bind(this)} className="btn btn-danger btn-customer" ><span className="glyphicon glyphicon-remove"></span> Xóa</button>
              <button  onClick={this.fetchData.bind(this)} className="btn btn-info btn-customer" ><span className="glyphicon glyphicon-list"></span> Lấy dữ liệu</button>
          </div>

          <div className="content-left">

           <Table  hover responsive >
                <thead>
                  <tr  className="primary">
                    <th>Stt</th>
                    <th>Tên người được UQ</th>
                    <th>Số CMTND</th>
                    <th>Ngày cấp</th>
                    <th>Nơi cấp</th>
                    <th>Địa chỉ</th>

                    <th>Ngày hiệu lực</th>
                    <th>Ngày hết hiệu lực </th>
                    <th>Phạm vi</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.data.map(function(i,index){

                                        return(
                                          <tr className="tr-authorize" key={index} onClick={that.clickRow.bind(that,i.cmtnd)} >
                                             <td >{index+1}</td>
                                            <td>{i.ten}</td>
                                            <td>{i.cmtnd}</td>
                                            <td>{i.ngaycap}</td>
                                            <td>{i.noicap}</td>
                                            <td>{i.diachi}</td>

                                            <td>{i.ngayHieuLuc}</td>
                                            <td>{i.ngayHetHieuLuc}</td>
                                            <td>{i.phamviUyQuyen}</td>
                                          </tr>
                                        )

                                      })

                                  }
                </tbody>
              </Table>


                <div className="col-xs-7 div-pagesize">

                  <label className="col-xs-4 pagesize" >Kích thước trang</label>
                   <div className="col-xs-3 select-pagesize">
                      <select onChange={that.selectChangeHandler.bind(that)} ref="pagesize" className="form-control">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                      </select>
                    </div>
              </div>
              <Pagination
                   className={that.state.data.length === 0? 'hidden':'shown'}
                   prev
                   next
                   first
                   last
                   ellipsis
                   maxButtons={5}
                   items={this.state.numPerPage}
                   activePage={this.state.activePage}
                   onSelect={this.handleSelect.bind(this)}>
               </Pagination>

          </div>

          <ModalAdd_Authorize

          />
          <Dialog
            showDiaLog={this.state.showDiaLog}
            close={this.closeDialog.bind(this)}
            delete={this.delete.bind(this)}
            cmtnd={this.state.idClick}
            />
            <ToastContainer
          position="top-left"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />

        </div>
    )
  }
  componentDidMount(){
   var that =this;
   var socket = new io.sails.connect("http://localhost:1339");
    io.socket.on('authorize', function (event){
      /// console.log(event);
      // console.log('thêm bản ghi');
       if(event.verb==='created'){
          console.log('thêm bản ghi');
          console.log(event);
          toast.info("Có 1 bản ghi dc thêm mới !", {
           position: toast.POSITION.BOTTOM_CENTER
         });
          //  toast.info("Có 1 bản ghi mới !", {
          //       position: toast.POSITION.TOP_LEFT
          //   });
          that.state.data.push(event.data)
          that.setState({data:that.state.data});
       }


    });
     console.log('getAll uy quyen')
      this.setState({activePage: "1"});
      var that =this;
      io.socket.post('/authorize/getAll',{page:this.state.activePage,pagesize:this.refs.pagesize.value}, function (resData, jwRes){

              if(jwRes.statusCode=="200"){
                console.log("ok");
                console.log(jwRes);
                  console.log(resData);
                  that.setState({data:resData.data,numPerPage:resData.numOfPages});
              }
              else{
                console.log('lỗi getAll ủy quyền');
              }



              // console.log(jwres);




      })
  }
  selectChangeHandler(event){
    var that =this
    io.socket.post('/authorize/getAll',{page:"1",pagesize:event.target.value},function (resData, jwRes){

        //  console.log(res.data);
          that.setState({data:resData.data,numPerPage:resData.numOfPages});
    })

  }
  handleSelect(eventKey) {
     this.setState({activePage: eventKey});
     console.log(eventKey);
     var that =this;
     io.socket.post('/authorize/getAll',{page:eventKey,pagesize:this.refs.pagesize.value},function (resData, jwRes){


           that.setState({data:resData.data,numPerPage:resData.numOfPages});
     })

  }

  constructor(props){
      super(props);
      this.state = {
          data : [],
          idClick:"",
          activePage:'1',
          numPerPage:'5',
          showDiaLog:false

      };
    //  this.changePage = this.changePage.bind(this);
  }
}
module.exports = connect(function(state){
  return{

  }
})(UyQuyenInformation);
