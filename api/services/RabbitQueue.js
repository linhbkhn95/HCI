var amqp = require('amqp');


// var open = require('amqplib').connect('amqp://localhost:15672/');
var rabbit = amqp.createConnection();
rabbit.on('error', function(e) {
  console.log("Error from amqp: ", e);
});
 module.exports={

      'pubtest':function addUsertoQueue(exchange,queue,message){
           console.log('publish message '+message.socmtnd);
           console.log(message);
            rabbit.exchange(exchange,  options={type:'fanout'}, function(ex){
               console.log('Exchange ' + ex.name + ' is open');
              // rabbit.queue(queue, {autoDelete: false}, function(q){
              //   rabbit.queue('', {exclusive: true, autoDelete: true}, function(q){
              //    q.bind(exchange, q.name);
              //     q.close();

                  ex.publish('',message,{});

              //  });
            //  });
          //  });
        //  });
        });
    }

 }
// add this for better debuging


// Wait for connection to become established.
