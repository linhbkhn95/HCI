import React from 'react';
import axios from 'axios';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import ModalDelay from './ModalDelay.js';
import ModalBrowse from './ModalBrowse.js';
import {connect} from 'react-redux';
//
// const requestData = (pageSize, page, sorted, filtered) => {
//   return new Promise((resolve, reject) => {
var ListStatus = React.createClass({
    getInitialState(){
       return{
           Data     : []
           
       }
    },
    componentDidMount(){
        var that =this;
        axios.post('/userindex/getAllStatus'

       ).then(res => {
             console.log('set ListStatus');
            that.setState({Data:res.data});
       });
    },
    render: function() {

        var Data     = this.state.Data,
            MakeItem = function(X,index) {
                return <option key={index}>{X.trangthai}</option>;
            };


        return  (<select
             onChange={event => this.props.onChange(event.target.value)}
             style={{ width: "100%" }}
             value={this.props.filter ? this.props.filter.value : "Tất cả"}
           >
            {Data.map(MakeItem)}
            </select>
          )

    }

});

class TableDemo extends React.Component {
  constructor() {
    super();
    this.state = {
        showModalDelay:false,
        showBrowse:false,
        id_browse:99,
        id_delay:111,
      data: [
        //   {
        //       nameproject:"HCI", nameuser:"Linh Trịnh", cost:"170,000,000"
        //   },
        //   {
        //     nameproject:"PTMNCN", nameuser:"Nhỏ ngọc", cost:"15,000,000"
        //  }

      ],
      pages: null,
      page:1,
      pageSize:5,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

access(){
    
  
  axios.post('/business/delay_browse',{business_id:this.state.id_delay})
  .then((res)=>{
     console.log(res.data);
  })
  this.removeData(this.state.id_delay);
    
  this.setState({showModalDelay:false});
    this.setState({showModalDelay:false});
}
closeModalDelay(){
    this.setState({showModalDelay:false});
}
showModalDelay(row){
    this.setState({showModalDelay:true,id_delay:row.original.business_id});
    console.log('show modaldelay');
 //   this.props.dispatch(removeCart(productId));
 }


 accessBrowse(){
  axios.post('/business/access_browse',{business_id:this.state.id_browse,role:this.props.user.role})
  .then((res)=>{
     console.log(res.data);
  })
  this.removeData(this.state.id_browse);
    
  this.setState({showModalBrowse:false});
}
closeModalBrowse(){
  this.setState({showModalBrowse:false});
}
showModalBrowse(row){
  this.setState({showModalBrowse:true,id_browse:row.original.business_id});
  console.log(row.original.business_id);
  
//   this.props.dispatch(removeCart(productId));
}
removeData(business_id){
  console.log("vao remove row")
  var index=this.state.data.map(function(x){ return x.business_id; }).indexOf(business_id);
  
  this.state.data.splice(index,1);
  this.setState({data:this.state.data})
}
  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: false });
    var that =this;
    console.log('vao fetch');
    // console.log(state);
    // console.log(state.filtered);
    // console.log(state.sorted);
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
     axios.post('/business/getlist_needbrowse',{role:this.props.user.role})

    .then(res => {
       console.log(res.data);
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      that.setState({
        data: res.data,
      
        loading: false
      });
      console.log(that.state);
    });
  }
 fn(shtk){
    console.log('xoa');
    this.getAllStatus();
    console.log(shtk);
 }
 onRowClick(state, rowInfo, column, instance){
    return {
        onDoubleClick: e => {
            console.log('A Td Element was clicked!')
            console.log('it produced this event:', e)
            console.log('It was in this column:', column)
            console.log('It was in this row:', rowInfo)
            console.log('It was in this table instance:', instance)
        }


    }
 }

  render() {
    const { data, pages, loading } = this.state;
   var that =this;
    return (
      <div>
        <ReactTable

          columns={[


          {
              Header:props =><div className=" header-react-table"></div>,

              
              sortable:false,
              Cell: (row) => (
               <div style={{textAlign:'center'}}>
                  <button  className="btn btn-link">Chi tiết</button>
               </div>

             ),

             Filter: ({ filter, onChange }) =>
                       null



            },
            {
              Header:props =><div  className=" header-react-table">Tên dự án</div>,
               id: "business_id",

              accessor: d => d.nameproject
            },
         
            {
              Header:props =><div  className=" header-react-table">Chi phí dự kiến</div>,
              accessor: "cost"

            },
            {
              Header:props =><div className=" header-react-table">Người phụ trách</div>,
              accessor: "nameuser"

            },
            {
            Header:props =><div className=" header-react-table">Phê duyêt/từ chối</div>,
            
                        
                          sortable:false,
                          Cell: (row) => (
                           <div style={{textAlign:'center'}}>
                              <button onClick={that.showModalBrowse.bind(this,row)} style={{fontSize:'12px'}}  className="btn btn-primary">Phê duyệt</button>
                              <button onClick={that.showModalDelay.bind(this,row)}  style={{fontSize:'12px',marginLeft:"2px"}} className="btn btn-default">Từ chối</button>
                           </div>
            
                         ),
            
                         Filter: ({ filter, onChange }) =>
                                   null
            
            
            
                        },
           



          ]}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={data}
          noDataText="Không có kết quả!"
          pages={pages} // Display the total number of pages
          loading={loading} // Display the loading overlay when we need it
          onFetchData={this.fetchData}

          style={{
            height: "300px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
           //custom header css cho table
           getTheadTrProps= {() =>{
                return{
                  className:'primary'
                }
           }}
          //  getTheadTdProps= {() =>{
          //       return{
          //         style:{color:'white'}
          //       }
          //  }}
          filterable
          pageText="Trang"
          rowsText="dòng"
          previousText="Trước"
          nextText="Tiếp"
          loadingText="Đang tải..."
          ofText="của"
          getTrProps={this.onRowClick}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br />
        <ModalDelay show={this.state.showModalDelay} onHide={that.closeModalDelay.bind(this)} access ={this.access.bind(this)} />
        <ModalBrowse show={this.state.showModalBrowse} onHide={that.closeModalBrowse.bind(this)} access ={this.accessBrowse.bind(this)} />

      </div>
    );
  }
}
module.exports  = connect(function(state){return {user:state.auth.user}})(TableDemo);
    //      onChange={this.fetchData} // Request new data when things change
