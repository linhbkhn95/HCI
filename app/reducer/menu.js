// var data=[
//  {parentId:1,GroupMenu:"Quản lý thông tin và TK NĐT",
//   listItem:[
//      {id: 1, NameMemu: 'Mở tài khoản nhà đầu tư', link: '/',Component:"Home"},
//      {id: 2, NameMemu: 'Duyệt mở tài khoản', link: '/login',Component:"Account"},
//    {id: 3, NameMemu: 'Yêu cầu đóng TK', link: '#',Component:"Account"},
//    {id: 4, NameMemu: 'Vấn tin tài khoản', link: '#',Component:"Account"},
//    {id: 5, NameMemu: 'Điều chỉnh thông tin', link: '#',Component:"Account"},
//    {id: 6, NameMemu: 'Đăng ký TKNH theo quỹ (Back)', link: '#',Component:"Account"}
// ]}];
var data = {
     data:[],
     ok:false
}
var dataMenu = (state=data,action) =>{
  switch (action.type) {
    case 'LOAD_MENU':
      return {...state,data:action.data};
   case  'RESET_MENU':
       return data;

    default:
      return state;
  }
}
module.exports = dataMenu;
