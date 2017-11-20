var amqp = require('amqp');


// var open = require('amqplib').connect('amqp://localhost:15672/');
var rabbit = amqp.createConnection();
rabbit.on('error', function(e) {
  console.log("Error from amqp: ", e);
});
 module.exports={


    'subtest': function subtest(){

      var rabbit = amqp.createConnection();
      rabbit.on('ready', function(){

        rabbit.exchange('add_user', {autoDelete: false}, function(ex){
          rabbit.queue('adduser', {autoDelete: false}, function(q){
            q.bind('add_user', 'adduser');
            console.log('lam viec');

            q.subscribe(function(message, headers, deliveryInfo, messageObject){
              //setTimeout(function(){
                console.log("vào đây");
                console.log(message);
                console.log(headers);
                console.log(deliveryInfo);
                ex.publish(deliveryInfo.replyTo, {message: 'done'}, {headers: headers});
            //  }, 1500);
            });
          });
        });
      });


    }
 }
// add this for better debuging


// Wait for connection to become established.
