
function showModalAddAccount(){
  return {
       type:"SHOW_MODAL_ADD_ACCOUNT",
       showModalAddAccount:true,
       textBtn:"Thêm"
  }
}
function closeModalAddAccount(){
  return {
       type:"CLOSE_MODAL_ADD_ACCOUNT",
       showModalAddAccount:false,
       textBtn:""
  }
}
function showModalEditAccount(dataModal){
  console.log('showModalEditAccount');
  console.log(dataModal);
  return {
       type:"SHOW_MODAL_EDIT_ACCOUNT",
       showModalAddAccount:true,
       textBtn:'Cập nhật',
       dataModal,
       disabled:"true"


  }
}
function showModalViewAcount(dataModal){
  return {type:"SHOW_MODAL_VIEW_ACCOUNT", showModalAddAccount: true, dataModal}
}
function deleteModalAddAccount(index){
  return {type:"DELETE_MODAL_ADD_ACCOUNT", SoCMTND: index}
}
module.exports = {showModalAddAccount,showModalEditAccount,closeModalAddAccount,showModalViewAcount,deleteModalAddAccount};
