var data ={
      username:null,
      isAuthenticated:false
    }

var authenticate = (state=data, action) => {

  switch (action.type) {

    case "LOG_IN":
      console.log('loginnnnn');
      return action.data;
    case "LOG_OUT":
      console.log('logout');
      return data;
    default:
      return state;
  }
}
module.exports = authenticate;
