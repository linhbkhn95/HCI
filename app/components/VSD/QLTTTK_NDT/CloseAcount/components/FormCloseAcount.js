import React from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {search,updateNumberPage,updateKeySearch} from 'actionCloseAccount';
var FormCloseAcount   =React.createClass({


      getInitialState(){
        return {
          sHTK: '',
          soDKSH: ''
        }
      },


      search(){
        console.log('search');
        var {dispatch} = this.props;


         io.socket.get('/userindex/search',{
            shtk :this.refs.shtk.value,
           sodksh : this.refs.dksh.value,
           trangthai  :   this.refs.sl.value,
          page:this.props.page,pagesize:this.props.pagesize
        },function(resData, jwres){
          console.log(resData);
           dispatch(search(resData.data));
           dispatch(updateKeySearch(keySearch,"search"));
           dispatch(updateNumberPage(resData.numPerPage));

        })
        // axios.post('user/search',{shtk:shtk,dksh:dksh,sl:sl})
        //   .then(res => {
        //      dispatch(search(res.data));
        //      console.log(res.data)
        //    })
        //   .catch(err => console.log(err));

      },
      changeHandler(e){
        // console.log(e);
          var {dispatch} = this.props;
        // this.setState({ sHTK : e.target.value });
        io.socket.get('/userindex/search',{
           shtk :this.refs.shtk.value,
          sodksh : this.refs.dksh.value,
          trangthai  :   this.refs.sl.value,
         page:this.props.page,pagesize:this.props.pagesize
       },function(resData, jwres){
         console.log(resData);
          dispatch(search(resData.data));
          dispatch(updateKeySearch(keySearch,"search"));
          dispatch(updateNumberPage(resData.numPerPage));
            })
      },
      changeHand(e){

        this.setState({ soDKSH : e.target.value });
      },
    render(){
       return(


         <div className="form-group row">
             <div className="col-xs-3">
               <h5 className="col-xs-6">Số hiệu TKGD</h5>
               <div className="col-xs-6"><input className="form-control"   ref="shtk" type="text"/></div>
             </div>
             <div className="col-xs-3">
                 <h5 className="col-xs-6">Số DKSH</h5>
                <div className="col-xs-6"><input className="form-control"  ref="dksh" type="text"/> </div>
             </div>

             <div className="col-xs-6">
               <h5 className="col-xs-2" >Trạng thái</h5>
               <div>
                 <div className="col-xs-4">
                 <select onChange={this.changeHandler} ref="sl" className="form-control">
                    <option></option>
                   <option>Mở</option>
                   <option>Đóng</option>
                   <option>Khóa</option>
                 </select>
                 </div>
                 <input style={{fontSize:"11px",padding:"4px"}} type="button" onClick={this.search} className="btn btn-primary col-xs-2" value="Search" />
               </div>


             </div>
         </div>
       )
   }
 });
 module.exports = connect(function (state){
   return {
          page:state.closeAccount.page,
          pagesize:state.closeAccount.pagesize,
          typeSearch:state.closeAccount.typeSearch
   };
 })(FormCloseAcount);
