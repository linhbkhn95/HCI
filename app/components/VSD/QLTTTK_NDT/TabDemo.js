import React from 'react';
import ReactDOM from 'react-dom';

var TabDemo = React.createClass({
    save(){
      console.log("ok");

      //  $('#myModal').modal('hide');

    },
    render(){
    return(
      <div>
      <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Launch demo modal
    </button>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 className="modal-title" id="gridSystemModalLabel">Đề nghị hoàn tất tài khoản</h4>
  </div>
  <div className="modal-body">
    <div className="row">
    <div className="form-group row">
        <div className="col-xs-2">
          <label>Số hiệu TKGD</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="col-xs-2">
          <label >Số ĐKSH</label>
          <input className="form-control" type="text"/>
        </div>

        <div className="col-xs-6">
          <label >Trạng thái</label>
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
      <div className="col-md-4">.col-md-4</div>
      <div className="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
    </div>
    <div className="row">
      <div className="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
      <div className="col-md-2 col-md-offset-4">.col-md-2 .col-md-offset-4</div>
    </div>
    <div className="row">
      <div className="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
    </div>
    <div className="row">
      <div className="col-sm-9">
        Level 1: .col-sm-9
        <div className="row">
          <div className="col-xs-8 col-sm-6">
            Level 2: .col-xs-8 .col-sm-6
          </div>
          <div className="col-xs-4 col-sm-6">
            Level 2: .col-xs-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    <button type="button" onClick={this.save()} className="btn btn-primary">Save changes</button>
  </div>
</div>
</div>
</div>
</div>
    );
  }
});

module.exports = TabDemo;
