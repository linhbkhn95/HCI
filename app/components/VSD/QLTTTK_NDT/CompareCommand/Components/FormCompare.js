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
        var shtk =this.refs.shtk.value;
        var dksh = this.refs.dksh.value;
         var sl  =   this.refs.sl.value;
        var keySearch={and:[
                           {like:{shtk:'%'+shtk+'%'}},
                          {like:{sodksh:'%'+dksh+'%'}},
                          {like:{trangthai:'%'+sl+'%'}}
                        ]
                      }
         io.socket.get('/userindex/search',{
            shtk :this.refs.shtk.value,
           dksh : this.refs.dksh.value,
           sl  :   this.refs.sl.value,
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
        console.log(e);
        this.setState({ sHTK : e.target.value });
      },
      changeHand(e){

        this.setState({ soDKSH : e.target.value });
      },
    render(){
       return(
         <div className="rows col-md-12 col-xs-12 form-search ">
             <div className="col-md-3 col-md-offset-2 col-xs-12 ">
               <div className="col-xs-5" style={{paddingTop:"5px"}}><label>Mã quỹ</label></div>
                <div className="col-xs-6">
                    <select ref="sl" className="form-control">
                               <option>VFMVF1</option>
                              <option>All</option>
                              <option>Pending</option>
                              <option>Ready</option>
                    </select>
                </div>
             </div>
             <div className="col-md-4 col-xs-12">
               <div className="col-xs-5"  style={{paddingTop:"5px"}}><label >Trạng thái</label></div>
               <div className="col-xs-6">
                   <select ref="sl" className="form-control">
                      <option>Không khớp</option>
                     <option>All</option>
                     <option>Pending</option>
                     <option>Ready</option>
                   </select></div>
              </div>

             <div className="col-md-2 col-md-offset-0 col-xs-6 col-xs-offset-3">

                 <input type="button" style={{fontSize:"11px",padding:"4px"}} className="btn btn-primary test_animation col-xs-6" value="Tìm kiếm" />



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
