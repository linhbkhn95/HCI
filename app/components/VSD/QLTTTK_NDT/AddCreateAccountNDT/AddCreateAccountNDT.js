import React from 'react';
var GeneralInformation = require('./components/GeneralInformation');
var UyQuyenInformation = require('./components/UyQuyenInformation');
var InfFATCA  = require('./components/InfFatca.js');

module.exports = class AddCreateAccountNDT extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className=" panel panel-success content" style={{float:"right", padding:"20px",minHeight:"400px"}}>

        <ul className="nav nav-tabs">
            <li className="active"><a data-toggle="tab" href="#tab1"><b>Thông tin chung</b></a></li>
            <li><a data-toggle="tab" href="#tab2"> <b>Thông tin ủy quyền</b></a></li>
            <li><a data-toggle="tab" href="#tab3"><b>Thông tin FATCA</b></a></li>
            <li><a data-toggle="tab" href="#tab4"><b>UPLOAD</b></a></li>
        </ul>

        <hr />
        <div className="tab-content">
          <div id="tab1" className="tab-pane fade in active">
              <GeneralInformation />
          </div>
          <div id="tab2" className="tab-pane fade">
              <UyQuyenInformation />
          </div>
          <div id="tab3" className="tab-pane fade">
            <InfFATCA />
          </div>
          <div id="tab4" className="tab-pane fade">
            <InfFATCA />
          </div>
        </div>
      </div>
    )
  }
}
