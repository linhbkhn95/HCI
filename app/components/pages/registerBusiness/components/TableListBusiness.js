import React from 'react';
import axios from 'axios';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import ModalDelay from './ModalDelay.js'
//
// const requestData = (pageSize, page, sorted, filtered) => {
//   return new Promise((resolve, reject) => {
var ListStatus = React.createClass({
    getInitialState(){
       return{
           Data     : ["Đã duyệt","Chờ phê duyệt","Đã hủy"]
       }
    },
    componentDidMount(){
    //     var that =this;
    //     axios.post('/userindex/getAllStatus'

    //    ).then(res => {
    //          console.log('set ListStatus');
    //         that.setState({Data:res.data});
    //    });
    },
    render: function() {

        var Data     = this.state.Data,
            MakeItem = function(X,index) {
                return <option key={index}>{X}</option>;
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
      data: [
      //     {
      //         nameProject:"HCI", namePerson:"Linh Trịnh", totalCost:"170,000,000",status:"Chờ phê duyệt"
      //     },
      //     {
      //       nameProject:"PTMNCN", namePerson:"Nhỏ ngọc", totalCost:"15,000,000", status:"Đã phê duyệt"
      //    }, {
      //       nameProject:"HCI", namePerson:"Linh Trịnh", totalCost:"170,000,000",status:"Đã hoàn thành"
      //   },
      //   {
      //     nameProject:"PTMNCN", namePerson:"Nhỏ ngọc", totalCost:"15,000,000", status:"Đã hủy"
      //  }

      ],
      showModalDelay:false,
      pages: null,
      page:1,
      pageSize:5,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }
  access(){
    console.log('dy');
  
      
    this.setState({showModalDelay:false});
}
closeModalDelay(){
    this.setState({showModalDelay:false});
}
showModalDelay(){
    this.setState({showModalDelay:true});
    console.log('show modaldelay');
 //   this.props.dispatch(removeCart(productId));
 }
  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: false });
    var that =this;
    console.log(state);
    console.log(this.props.user);
    console.log(state.sorted);
    
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
     axios.post('/business/getlist',{user_id:this.props.user.id}

    ).then(res => {
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
    return (
      <div>
        <ReactTable

          columns={[


          {
              Header:props =><div className=" header-react-table"></div>,

              
              sortable:false,
              Cell: (row) => (
               <div style={{textAlign:'center'}}>
                  <button onClick={this.showModalDelay.bind(this)}  className="btn btn-link">Sửa</button>
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
         
            // {
            //   Header:props =><div  className=" header-react-table">Chi phí dự kiến</div>,
            //   accessor: "totalCost"

            // },
            {
              Header:props =><div className=" header-react-table">Người phụ trách</div>,
              accessor: "nameuser"

            },
            {
                Header:props =><div className=" header-react-table">Trạng thái</div>,
              accessor: "status",
              Cell: ({value}) => (
                <span>

                  <span style={{
                    color:  
                       value ==1 ? 'rgb(0, 255, 247)' :value>1 ? 'rgb(230, 207, 17)' 
                      : 'rgb(162, 42, 79)',
                    transition: 'all .3s ease'
                  }}>
                    &#x25cf;
                  </span> {
                    value==1? 'Đã duyệt' :value>1? 'Chờ phê duyệt' : 'Đã hủy' 
                  }
                </span>
              ),

              filterMethod: (filter, row) => {
                  console.log(filter);
                  console.log(row);
                   if (filter.value === "tatca") {
                     return true;
                   }
                   if (filter.value === "true") {
                     return row[filter.id] >= 21;
                   }
                   return row[filter.id] < 21;
               },
              Filter: ({ filter, onChange }) =>

                 <ListStatus onChange={onChange} filter={filter} />
            },
            {
            Header:props =><div className=" header-react-table">Hủy công tác</div>,
            
                        
                          sortable:false,
                          Cell: (row) => (
                           <div style={{textAlign:'center'}}>
                              <button style={{fontSize:'12px'}}  className="btn btn-primary">Hủy</button>
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
        <ModalDelay show={this.state.showModalDelay} onHide={this.closeModalDelay.bind(this)} access ={this.access.bind(this)} />

      </div>
    );
  }
}
module.exports  = connect(function(state){return{user:state.auth.user}})(TableDemo);
    //      onChange={this.fetchData} // Request new data when things change
