/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        ten:{
           type:"string"

        },
        username:{
           type:"string"
        },
        password:{
           type:"string"
        },
        role:{
           type:"string"
        },
        online:{
          type:'boolean',
          defaultsTo:false
        }




  }
};
