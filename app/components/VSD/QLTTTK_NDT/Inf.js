import React from 'react';

module.exports = class Inf extends React.Component {
  constructor(props) {
      super(props);
      var list = [
        {Identifier:"1", TKGD:"ABCXYZ", DKSH:"13456", CustomerName:"Anna Believe", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
        {Identifier:"2", TKGD:"TYUOOPU", DKSH:"893231", CustomerName:"Bien Pham Xuan", CustomerType:"VIP", Start: "04-07-2017",State:"Ready"}
      ];
      this.state = {
          listCustomerInfo : list
      };
  }
  render(){
    return(
      <div className="col-xs-9 panel panel-success content-close-account">
        <h2 className="">Thông tin chung</h2>
        <button className="btn btn-primary btn-customer" ><span className="glyphicon glyphicon-plus-sign"></span> Thêm </button>
        <button className="btn btn-success btn-customer" ><span className="glyphicon glyphicon-pencil"></span> Sửa</button>
        <button className="btn btn-danger btn-customer" ><span className="glyphicon glyphicon-remove"></span> Delete</button>
        <a className="btn btn-primary btn-customer"><input  type="checkbox" /> Lấy dữ liệu</a>
        <hr />
        <div className="form-group row">
            <div className="col-xs-2">
              <label>Identifier</label>
              <input className="form-control" type="text"/>
            </div>
            <div className="col-xs-2">
              <label >TKGD</label>
              <input className="form-control" type="text"/>
            </div>
            <div className="col-xs-2">
              <label >DKSH</label>
              <input className="form-control"  type="text"/>
            </div>
            <div className="col-xs-6">
              <label >State</label>
              <div>
                <div className="col-xs-7">
                <select className="form-control">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Ready</option>
                </select>
                </div>
                <input type="button" className="btn btn-primary col-xs-3" value="Search" />
              </div>

            </div>
        </div>
        <hr />
        <table className="table table-hover">
          <thead>
            <tr  className="success">
              <th>TKGD</th>
              <th>Identifier</th>
              <th>Customer name</th>
              <th>DKSH</th>
              <th>Customer Type</th>
              <th>Start</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
          {this.state.listCustomerInfo.map(function(i,index){

                                  return(
                                    <tr key={index}>
                                      <td>{i.TKGD}</td>
                                      <td>{i.Identifier}</td>
                                      <td>{i.CustomerName}</td>
                                      <td>{i.DKSH}</td>
                                      <td>{i.CustomerType}</td>
                                      <td>{i.Start}</td>
                                      <td>{i.State}</td>
                                    </tr>
                                  )
                                })
                              }
          </tbody>
        </table>
      </div>
    );
  }
}
