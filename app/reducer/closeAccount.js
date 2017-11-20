var data = {
    selectedRows: new Set(),
    listCustomerInfo : [

    ],
    typeSearch:"getAll",
    keySearch:{},
    page:"1",
    pagesize:"5",
    numPerPage:"2",
    checked: false,
    showModal:false,
    account:{
        infAccount:{},
        listMoney:[]
    }

};
var closeAccount = (state=data,action) =>{
  switch (action.type) {
    case 'SEARCH_CLOSE_ACCOUNT':
      console.log( 'SEARCH_CLOSE_ACCOUNT');
      console.log(action);
      return {...state,listCustomerInfo:action.listCustomerInfo};
    case  'GET_ACCOUNT':
       return data;
    case  'SHOW_MODAL':
         return{...state,showModal:true,account:action.account};
    case 'CLOSE_MODAL':
         return {...state,showModal:false,account:{}};
    case 'UPDATE_PAGE_PAGESIZE':
        return {...state,page:action.data.page,pagesize:action.data.pagesize};
    case 'UPDATE_NUMBER_PAGE':
        return {...state,numPerPage:action.numPerPage};
   case 'UPDATE_KEY_SEARCH':
       return {...state,numPerPage:action.keySearch,typeSearch:action.typeSearch};
    case  'RESET_LIST_ACCOUNT':
         return data;
    default:
      return state;
  }
}
module.exports = closeAccount;
