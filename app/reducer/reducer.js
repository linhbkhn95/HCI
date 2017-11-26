var redux = require('redux');
var username = require('./username.js');
var dataMenu = require('./menu.js');

var language = require('./language.js');
var notification = require('./notification.js');
var authenticate = require('./authenticate.js');
var closeAccount = require('./closeAccount.js');
var addAccount = require('./addAccount.js');
var auth = require('./auth.js');
var datLenh = require('./datlenh.js');
 var reducer = redux.combineReducers ({dataMenu,auth,language,notification,closeAccount,addAccount,authenticate,datLenh});
 module.exports = reducer;
