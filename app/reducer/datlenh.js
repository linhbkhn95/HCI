var dataDatLenh = {
  showModalThongTinUyQuyen : false,
  showModalChiTiet:false,
  showModalCease:false,
  showModalKichHoat:false,
  detailNDTDangKy:{},
  listSoDuHienCo:[],
  searchListSoDuHienCo:[],
  listSoLenh:[],
  searchListSoLenh:[],
  listNDTDangKy:[],
  searchListNDTDangKy:[],
  listChiTietGoiSip:[],
  searchListChiTietGoiSipNDT:[]
}
var DatLenh = (state = dataDatLenh, action)=>{
    switch (action.type) {
      case 'SHOW_MODAL_THONGTIN_UYQUYEN':
          return {...state, showModalThongTinUyQuyen :action.showModalThongTinUyQuyen};
      case 'CLOSE_MODAL_THONGTIN_UYQUYEN':
          return {...state, showModalThongTinUyQuyen :action.showModalThongTinUyQuyen};
      case 'SHOW_MODAL_CHITIET':
          return {...state, showModalChiTiet :action.showModalChiTiet};
      case 'CLOSE_MODAL_CHITIET':
          return {...state, showModalChiTiet :action.showModalChiTiet};
      case 'SHOW_MODAL_CEASE':
          return{...state, showModalCease:action.showModalCease, detailNDTDangKy:action.detailNDTDangKy};
      case 'CLOSE_MODAL_CEASE':
          return{...state, showModalCease:action.showModalCease};
      case 'SHOW_MODAL_KICHHOAT':
          return{...state, showModalKichHoat:action.showModalKichHoat, detailNDTDangKy:action.detailNDTDangKy};
      case 'CLOSE_MODAL_KICHHOAT':
          return{...state, showModalKichHoat:action.showModalKichHoat};
      case 'LIST_SODU_HIENCO':
          return {...state, listSoDuHienCo :action.listSoDuHienCo};
      case 'LIST_SOLENH':
          return {...state, listSoLenh :action.listSoLenh};
      case 'LIST_NDT_DANGKY':
          return {...state, listNDTDangKy:action.listNDTDangKy};
      case 'LIST_CHITIET_GOISIP':
          return{...state, listChiTietGoiSip:action.listChiTietGoiSip, searchListChiTietGoiSipNDT:action.listChiTietGoiSip};
      case 'SEARCH_SODU_HIENCO':
          return {...state,searchListSoDuHienCo:state.listSoDuHienCo.filter((e,i)=>{
              if(e.SHTKGD.search(action.dataSearch.SHTKGD)>=0 && e.MaCCQ.search(action.dataSearch.MaCCQ)>=0){
                return true;
              }
              return false;
           })};
       case 'SEARCH_SOLENH':
           return {...state,searchListSoLenh:state.listSoLenh.filter((e,i)=>{
             if(e.SHTKGD.search(action.dataSearch.SHTKGD)>=0 && e.MaCCQ.search(action.dataSearch.MaCCQ)>=0){
               return true;
             }
             return false;
          })};
      case 'SEARCH_LISTNDT_DANGKY':
          return {...state,searchListNDTDangKy:state.listNDTDangKy.filter((e,i)=>{
            if(e.SHTKGD.search(action.dataSearch.SHTKGD)>=0 && e.MaCCQ.search(action.dataSearch.MaCCQ)>=0 && e.SDKSH.search(action.dataSearch.SDKSH)>=0){
              return true;
            }
            return false;
         })};
     case 'SEARCH_LISTCHITIET_GOISIP':
         return {...state,searchListChiTietGoiSipNDT:state.searchListChiTietGoiSipNDT.filter((e,i)=>{
          //  if(e.TuNga.search(action.dataSearch.SHTKGD)>=0 && e.MaCCQ.search(action.dataSearch.MaCCQ)>=0 && e.SDKSH.search(action.dataSearch.SDKSH)>=0){
             return true;
          //  }
          //  return false;
        })};
      default: return state;

    }
}
module.exports = DatLenh;
