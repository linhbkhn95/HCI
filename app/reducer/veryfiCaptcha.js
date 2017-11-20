var veryfiCaptcha =(state=false,action) =>{
  switch (action.type) {
    case 'Reset':
      return false;
    case 'Success':
      return true;
    default:
      return state;
  }
}
module.exports = veryfiCaptcha;
