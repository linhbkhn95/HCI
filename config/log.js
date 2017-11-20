// var winston = require('winston');
// var customLogger = new winston.Logger();
//
// // A console transport logging debug and above.
// customLogger.add(winston.transports.Console, {
//   level: 'debug',
//   colorize: true
// });
//
// // A file based transport logging only errors formatted as json.
// customLogger.add(winston.transports.File, {
//   level: 'error',
//   filename: 'filename.log',
//   json: true
// });
//
// module.exports.log = {
//   // Pass in our custom logger, and pass all log levels through.
//   custom: customLogger,
//   // level: 'verbose',
//
//   // Disable captain's log so it doesn't prefix or stringify our meta data.
//   // inspect: false


var local = require('./local');
/** Cach 1 ***************************/
var config = {
    file_options: {
        name: 'app-log',
        filename: './app.log',
        level: 'info',
        timestamp: true,
        colorize: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
        prettyPrint: true,
        json: true,
        maxsize: 512 * 1024
    },
    mail_options: {
        level:'error',
        to: 'linhxuancb9596@gmail.com',
        from:local.username,
        subject: 'a',
        host: 'smtp.gmail.com',
        username: local.username,
        password: local.password
        // ssl: true,
        // prettyPrint: true,
    }
};




var winston = require('winston');
 var Mail = require('winston-mail').Mail;
// require('winston-email');

//**************----add log to mongodb---- ***************************************************************/
 require('winston-mongodb').MongoDB
//

require('winston-logstash');

// winston.add(winston.transports.Logstash, {
//   port: 28777,
//   node_name: 'my node name',
//   host: '127.0.0.1'
// });

var logger = new (winston.Logger)({
   transports: [
      //  new(winston.transports.MongoDB)({
      //      db : 'mongodb://localhost:27017/funsurv',
      //      collection: 'logs',
      //      level:'error'
      //  }),
      //  new(winston.transports.Mail)( {
      //      level:'error',
      //      to: 'linhxuancb9596@gmail.com',
      //      from:local.username,
      //      subject: 'Log hệ thống Funsurv',
      //      host: 'smtp.gmail.com',
      //      username: local.username,
      //      password: local.password,
      //       ssl: true,
      //      // prettyPrint: true,
      //  })
      //  new(winston.transports.Logstash),({
      //    port: 5043,
      //    node_name: 'my node name',
      //    host: '192.168.1.218'
      //  })
      ]
   });
logger.add(winston.transports.Logstash, {
   port: 28777,
   node_name: 'Funsurv',
   host: '127.0.0.1',
   level:'error'
 });
logger.add(winston.transports.Console, {
  level: 'silly',
  colorize: true
});


module.exports.log = {
 // custom: logger,
  //level: 'verbose'

  // Disable captain's log so it doesn't prefix or stringify our meta data.
};
