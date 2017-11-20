// import { SET_CURRENT_USER } from '../actions/types';
//import isEmpty from 'lodash.isEmpty';

var data = {
  isAuthenticated: false,
  user: {}
};


 var auth = (state = data, action) => {
   console.log('dmmsádadadad');
    c//onsole.log(!isEmpty(action.user));
  switch(action.type) {

    case "SET_CURRENT_USER":
      return {
        isAuthenticated: false,
        user: action.user
      };
    default:
       return state;
  }
}
module.exports = auth;
