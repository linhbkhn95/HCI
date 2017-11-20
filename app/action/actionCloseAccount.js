var LOAD_INF ="LOAD_INF";
var RESET_ACCOUNT ="RESET_ACCOUNT";
var SEARCH_CLOSE_ACCOUNT ="SEARCH_CLOSE_ACCOUNT";
var CLOSE_MODAL ="CLOSE_MODAL";
var SHOW_MODAL ="SHOW_MODAL";
var GET_ALL_CLOSE_ACCOUNT = "GET_ALL_CLOSE_ACCOUNT";
var RESET_LIST_ACCOUNT ="RESET_LIST_ACCOUNT";
var UPDATE_PAGE_PAGESIZE = "UPDATE_PAGE_PAGESIZE";
var UPDATE_NUMBER_PAGE = "UPDATE_NUMBER_PAGE";
var UPDATE_KEY_SEARCH = "UPDATE_KEY_SEARCH";
function loadInf(infAccount){
  return{type:LOAD_INF,infAccount};
}
function showModal(account){
  console.log(account);
  return {
       type:SHOW_MODAL,

       account
   };
}
function updateKeySearch(keySearch,typeSearch){
  return {
       type:UPDATE_KEY_SEARCH,

       keySearch,
       typeSearch
   };
}
function updatePagePageSize(data){
 console.log(data);
  return {
       type:UPDATE_PAGE_PAGESIZE,

       data
   };
}
function updateNumberPage(numPerPage){
  return {
       type:UPDATE_NUMBER_PAGE,

       numPerPage
   };
}
function closeModal(){
  return{
    type:CLOSE_MODAL

  }
}
function resetAccount(){
   return{type:RESET_ACCOUNT};
}
function search(listCustomerInfo){
  console.log('action search');
  console.log(listCustomerInfo);
  return{type:SEARCH_CLOSE_ACCOUNT,listCustomerInfo};
}
function resetListAccount(){
   return{type:RESET_ACCOUNT};
}
module.exports = {search,updateKeySearch,updateNumberPage,updatePagePageSize,resetListAccount,showModal,resetAccount,closeModal};
