/**
 * Userproject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
   autoPK: false,
  attributes: {
      id: {
        columnName: "id",
        type: "integer",
        primaryKey: true,
        autoIncrement: true,
        require: true,
        unique: true
      },
      user_id:{
        type:"integer"
      },
      business_id:{
        type:"integer"
      }

      
  }
};

