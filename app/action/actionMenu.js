var LOAD_MENU ="LOAD_MENU";
var RESET_MENU ="RESET_MENU";
function loadMenu(data){
  return{type:LOAD_MENU,data};
}
function resetMenu(){
   return{type:RESET_MENU};
}
module.exports = {loadMenu,resetMenu};
