/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        sessionid:{
          type:"string"
        },
        access_token:{
           type:"string"

        },
        refresh_token:{
           type:"string"
        },
        expires_in:{
           type:"string"
        },
        token_type:{
           type:"string"
        }





  }
};
