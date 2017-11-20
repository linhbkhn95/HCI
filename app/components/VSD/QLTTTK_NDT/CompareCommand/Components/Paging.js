import React from 'react'
import {Pagination} from 'react-bootstrap'

class Paging extends React.Component{
  constructor(props){
      super(props);
      this.state = {

          activePage:'1'


      };
    //  this.changePage = this.changePage.bind(this);
   }
   selectPageSize(event){

     console.log(event.target.value)
     this.props.selectPageSize(event.target.value)
   }
   selectPage(eventKey) {
      this.setState({activePage: eventKey});
      console.log(eventKey);
      this.props.selectPage(eventKey,this.refs.pagesize.value)
      this.setState({activePage:eventKey})

   }

    render(){
      return(
            <div className="rows col-xs-12">
                  <div className="col-md-5 col-xs-12  div-pagesize">

                    <label className="col-md-6 col-xs-5 pagesize" >Kích thước trang</label>
                      <div className="col-md-6 col-xs-6 select-pagesize">
                        <select onChange={this.selectPageSize.bind(this)} ref="pagesize" className="form-control">
                          <option>5</option>
                          <option>10</option>
                          <option>20</option>
                        </select>
                      </div>
                 </div>
                  <div className="col-md-7 col-xs-12 col-xs-push-2">
                    <Pagination
                         className={1 === 0? 'hidden':'shown'}
                         prev
                         next
                         first
                         last
                         ellipsis
                         maxButtons={5}
                         items={this.props.numPerPage}
                         activePage={this.state.activePage}
                         onSelect={this.selectPage.bind(this)}>
                     </Pagination>
                     </div>
      </div>
      )
    }

}
module.exports = Paging;
