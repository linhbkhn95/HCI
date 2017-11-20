import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {closeModalThongTinUyQuyen} from 'actionDatLenh';

class UyQuyen extends React.Component{
  constructor(props){
    super(props);
    var list = [{HoTen:"Phạm Xuân Biển", CMND:"23791283712", NgayCap:"22/04/1995"},
                {HoTen:"Phạm Trường Hương", CMND:"432456764", NgayCap:"22/04/1995"}]
    this.state = { list: list };
  }
  close(){
    var {dispatch} = this.props;
    dispatch(closeModalThongTinUyQuyen());
  }
  render(){
    return(
        <div className="popup-form">
            <Modal bsSize="sm" show={this.props.showModal} onHide={this.close}>
                <Modal.Header>
                    <Modal.Title> <div className="title-popup">Ủy quyền</div> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <table className="table table-hover" >
                  <thead>
                    <tr  className="success">
                      <th>Họ và tên</th>
                      <th>CMND</th>
                      <th>Ngày cấp</th>
                    </tr>
                  </thead>
                  <tbody>{this.state.list.map(function(i,index){

                                          return(
                                            <tr key={index}>
                                              <td>{i.HoTen}</td>
                                              <td>{i.CMND}</td>
                                              <td>{i.NgayCap}</td>
                                            </tr>
                                          )
                                        })
                                      }
                  </tbody>
                </table>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close.bind(this)}>Thoát</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
  }
}

module.exports = connect(function(state){
  return  {showModal:state.datLenh.showModalThongTinUyQuyen};
})(UyQuyen);
