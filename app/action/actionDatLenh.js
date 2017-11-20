function showModalThongTinUyQuyen(){
  return{
    type:'SHOW_MODAL_THONGTIN_UYQUYEN',
    showModalThongTinUyQuyen:true
  }
}
function closeModalThongTinUyQuyen(){
  return{
    type:'CLOSE_MODAL_THONGTIN_UYQUYEN',
    showModalThongTinUyQuyen:false
  }
}
function showModalChiTiet(){
  return{
    type:'SHOW_MODAL_CHITIET',
    showModalChiTiet:true
  }
}
function closeModalChiTiet(){
  return{
    type:'CLOSE_MODAL_CHITIET',
    showModalChiTiet:false
  }
}
function showModalCease(detailNDTDangKy){
  return{type:"SHOW_MODAL_CEASE", showModalCease:true, detailNDTDangKy}
}
function closeModalCease(){
  return{type:"CLOSE_MODAL_CEASE", showModalCease:false}
}
function showModalKichHoat(detailNDTDangKy){
  return{type:"SHOW_MODAL_KICHHOAT", showModalKichHoat:true, detailNDTDangKy}
}
function closeModalKichHoat(detailNDTDangKy){
  return{type:"CLOSE_MODAL_KICHHOAT", showModalKichHoat:false}
}
function getListSoDuHienCo(listSoDuHienCo){
  return{
    type:"LIST_SODU_HIENCO",
    listSoDuHienCo:listSoDuHienCo
  }
}
function getListSoLenh(listSoLenh){
  return{
    type:"LIST_SOLENH", listSoLenh
  }
}
function getListChiTietGoiSip(listChiTietGoiSip){
    return{
      type:"LIST_CHITIET_GOISIP",listChiTietGoiSip
    }
}
function getListNDTDangKy(listNDTDangKy){
  return{
    type:"LIST_NDT_DANGKY",listNDTDangKy
  }
}
function searchSoDuHienCo(dataSearch){
  return{
    type:'SEARCH_SODU_HIENCO',
    dataSearch
  }
}
function searchListSoLenh(dataSearch){
  return{type:"SEARCH_SOLENH", dataSearch}
}
function searchListNDTDangKy(dataSearch){
  return {
    type:"SEARCH_LISTNDT_DANGKY", dataSearch
  }
}
function searchListChiTietGoiSipNDT(dataSearch){
  return{type:"SEARCH_LISTCHITIET_GOISIP", dataSearch}
}
module.exports = {showModalThongTinUyQuyen, closeModalThongTinUyQuyen,showModalChiTiet,closeModalChiTiet,getListSoDuHienCo,
  searchSoDuHienCo,searchListSoLenh,getListSoLenh,getListNDTDangKy,getListChiTietGoiSip,searchListNDTDangKy,
showModalCease,closeModalCease,closeModalKichHoat,showModalKichHoat,searchListChiTietGoiSipNDT};
