/**
 * Menu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  // connection: 'redis',
  attributes: {
        //  role:{
        //    type:'string'
        //  },
        //  data:{
        //     type:'array'
        //  }
        id: {
          columnName: "id_menu",
          type: "integer",
          primaryKey: true,
          autoIncrement: true,
          require: true,
          unique: true
        },
        data_menu: {
          columnName: "data_menu",
          type: "json",
          // require: true,
          // unique: true
        },
        role:{
          type:"string"
        }
        
  }
};
