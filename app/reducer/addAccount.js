var list = [
  {TenNguoiDuocUQ:"Phạm Xuân Biển", SoCMTND:"1012226969", NgayCap:"12/12/2000", NoiCap:"Quảng Ninh", DiaChi:"Hà Nội",SoDT:"012312312" ,NgayHieuLuc: "08-07-2017",NgayHetHieuLuc:"05/06/2017" ,PhamVi:"Đặt lệnh"},
  {TenNguoiDuocUQ:"Nguyễn Văn A", SoCMTND:"12312562341", NgayCap:"05/12/2000", NoiCap:"Hà Nội", DaiChi:"Hà Nội",SoDT:"012312312" ,NgayHieuLuc: "08-07-2017",NgayHetHieuLuc:"05/06/2017" ,PhamVi:"Đặt lệnh"}
];
var data={
      authorize:{
        list:list,
        showModalAddAccount: false,
        disable:false,
        dataModal:{},
        textBtn:""
      }
}

var addAccount = (state=data,action) =>{
  switch (action.type) {
    case 'SHOW_MODAL_ADD_ACCOUNT':
        return {...state,authorize:{...state.authorize,showModalAddAccount:action.showModalAddAccount, textBtn:action.textBtn}};
    case 'SHOW_MODAL_EDIT_ACCOUNT':
             return {...state,authorize:{...state.authorize,dataModal:action.dataModal,showModalAddAccount:action.showModalAddAccount, textBtn:action.textBtn}};
    case 'CLOSE_MODAL_ADD_ACCOUNT':
        return {...state,authorize:{...state.authorize,showModalAddAccount:action.showModalAddAccount, textBtn:action.textBtn}};
    case 'SHOW_MODAL_VIEW_ACCOUNT':
        return {...state, authorize:{...state.authorize, dataModal:action.dataModal, showModalAddAccount:action.showModalAddAccount}}
    case 'DELETE_MODAL_ADD_ACCOUNT':
        return {...state, authorize:{...state.authorize, list: state.authorize.list.filter((e,i)=>{ if(e.SoCMTND === action.SoCMTND){return false;} return true; }) }}
    default:
      return state;
  }
}

module.exports = addAccount;
