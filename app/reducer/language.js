// import { SET_CURRENT_USER } from '../actions/types';

var data ={language:"en"};

 var languege = (state = data, action) => {

  switch(action.type) {

    case "CHANGE_LANGUAGE":
      return {language:action.language};
      
    default:
       return data;
  }
}
module.exports = languege;