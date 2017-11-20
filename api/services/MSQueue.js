
 module.exports={

      'pubtest':function pubtest(exchange,queue,message){
          RabbitQueue.pubtest(exchange,queue,message);
      },
      'pubtest1':function addUsertoQueue(exchange,queue,message){
           console.log('publish message '+message.socmtnd);
           console.log(message);
            rabbit.exchange(exchange,  options={type:'fanout'}, function(ex){
               console.log('Exchange ' + ex.name + ' is open');
              // rabbit.queue(queue, {autoDelete: false}, function(q){
              //   rabbit.queue('', {exclusive: true, autoDelete: true}, function(q){
              //    q.bind(exchange, q.name);
              //     q.close();

                  ex.publish('',message,{replyTo: q.name});
                    q.subscribe(function(message){
                    //  console.log(message);
                      q.destroy();
                      q.close();
                      console.log('Charged! add users Thanks!');
                    });
              //  });
            //  });
          //  });
        //  });
        });
    }
 }
// add this for better debuging


// Wait for connection to become established.
