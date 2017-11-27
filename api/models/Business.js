/**
 * Business.js
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
            columnName: "business_id",
            type: "integer",
            primaryKey: true,
            autoIncrement: true,
            require: true,
            unique: true
          },
          target:{
            type:"text"
          },
          address:{
            type:"text"
          },
          area:{
            type:"integer"
          },
          user_id:{
            type:"integer"
          },
          status:{
            type:"integer"
          
  
          },
          cost:{
            type:"integer"
          },
          date_start:{
            type:"text"
          },
          date_finish:{
            type:"text"
          },
          project_id:{
            type:'integer'
          }
  
    }
  };
  
  