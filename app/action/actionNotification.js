function showNotifi(txt){
  return{type:'SHOW_NOTIFICATION',txt};
}
 function hideNotifi(){
   return{type:'HIDE_NOTIFICATION'};
}
module.exports = {showNotifi,hideNotifi};
