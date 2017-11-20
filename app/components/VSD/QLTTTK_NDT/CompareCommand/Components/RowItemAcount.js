import React from 'react';
import {connect} from 'react-redux';
import {showModal} from 'actionCloseAccount';
import axios from 'axios';
 var RowItemAcount = React.createClass( {
  open(){
    console.log('showModalsss');
  },
  showDetail(shtk){
    console.log(shtk);
    //alert('show detail '+ shtk);
    this.props.showRowsDetail(shtk);
  },
  showPopup(shtk){
     console.log(shtk);
     this.props.showPopup(shtk);
  },
  formatMoney(num){
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  },
  render () {

      console.log(this.props.parent);
      var icon
       if(this.props.showDetail=="none")
            icon=" glyphicon glyphicon-plus icon-plus"
      else{
          icon=" glyphicon glyphicon-minus icon-minus"
        }
       if(this.props.parent===true){
        return(
        <tr className="tr-cmd"  style={{fontWeight:"bold"}} >
          <td style={{textAlign:"center"}} >

              <button onClick={this.showDetail.bind(this,this.props.shtk)}  style={{fontSize:"7px"}}  className=" btn-primary"><span className={icon}></span></button>
            </td>

          <td>{this.props.shtk}</td>


          <td>{this.props.maccq}</td>
          <td>{this.props.loailenh}</td>
          <td>{this.props.giatrilenh}</td>
          <td>{this.props.sotiennop}</td>
          <td>{this.props.diengiai}</td>

          <td>{this.props.sochungtu}</td>
          <td>{this.props.sotiendenghi}</td>
          <td>{this.props.trangthai}</td>
          <td>{this.props.sotienthua}</td>

          <td>{this.props.sotienthieu}</td>

        </tr>
      )
    }
      else{
        return(
          <tr onDoubleClick={this.showPopup.bind(this,this.props.shtk)} className="tr-cmd" style={{display:this.props.showDetail}}>
              <td style={{textAlign:"center"}}>


                </td>

              <td></td>


              <td>{this.props.maccq}</td>
              <td>{this.props.loailenh}</td>
              <td>{this.props.giatrilenh}</td>
              <td>{this.props.sotiennop}</td>
              <td>{this.props.diengiai}</td>

              <td>{this.props.sochungtu}</td>
              <td>{this.props.sotiendenghi}</td>
              <td>{this.props.trangthai}</td>
              <td>{this.props.sotienthua}</td>

              <td>{this.props.sotienthieu}</td>

        </tr>
        )
      }

  }
});
module.exports = connect(function (state){
  return {

  };
})(RowItemAcount);
// <a className="details-icon"  href="#">
//     <i className="glyphicon glyphicon-plus icon-plus">
//     </i>
// </a>
