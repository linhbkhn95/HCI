/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  autoPK: false,
  attributes: {
        id:{
           type:"integer"

        },
        name:{
           type:"string"
        },
        email:{
           type:"string"
        },
        role:{
           type:"string"
        }
       




  }
};
