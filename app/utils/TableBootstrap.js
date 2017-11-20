import React from 'react';
import axios from 'axios';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

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
      data: [],
      pages: null,
      page:1,
      pageSize:5,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });
    var that =this;
    console.log(state);
    console.log(state.filtered);
    console.log(state.sorted);
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
     axios.post('/userindex/search',{pagesize:state.pageSize,page:state.page+1,keySearch:state.filtered,sortSearch:state.sorted}

    ).then(res => {
      console.log(res.data);
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      that.setState({
        data: res.data.data,
        pages: res.data.numPerPage,
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
              Header:props =><div className=" header-react-table">Hủy/Sửa</div>,

              maxWidth:100,
              sortable:false,
              Cell: (row) => (
               <div style={{textAlign:'center'}}>
                  <button onClick={this.fn.bind(this,row.original.shtk)} style={{padding:'4px',fontSize:'10px'}}  className="btn btn-danger ">Xóa</button>
                  <button  style={{padding:'4px',fontSize:'10px'}} className="btn btn-primary">Sửa</button>
               </div>

             ),

             Filter: ({ filter, onChange }) =>
                       null



            },
            {
              Header:props =><div  className=" header-react-table">Số hiệu tài khoản</div>,
              id: "shtk",

              accessor: d => d.shtk
            },
            {
                Header:props =><div  className=" header-react-table">Tên</div>,
              accessor: "ten"


            },
            {
              Header:props =><div  className=" header-react-table">Số DKSH</div>,
              accessor: "sodksh"

            },
            {
              Header:props =><div className=" header-react-table">Ngày cấp</div>,
              accessor: "ngaycap"

            },
            {
              Header:props =><div className=" header-react-table">Nơi cấp</div>,
              accessor: "noicap"
           },
            {
              Header:props =><div className=" header-react-table">Diễn giải</div>,
              accessor: "diengiai"
            },
            {
                Header:props =><div className=" header-react-table">Trạng thái</div>,
              accessor: "trangthai",
              Cell: ({value}) => (
                <span>

                  <span style={{
                    color: value === 'Mở' ? '#57d500'
                      : value === 'Đóng' ? '#ffbf00'
                      : '#ff2e00',
                    transition: 'all .3s ease'
                  }}>
                    &#x25cf;
                  </span> {
                    value === 'Mở' ? 'Đang Mở'
                    : value === 'Đóng' ? `Đã Đóng`
                    : 'Đã khóa'
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

      </div>
    );
  }
}
module.exports  = TableDemo;
    //      onChange={this.fetchData} // Request new data when things change
