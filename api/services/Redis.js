var redis = require("redis"),
  clientpub = redis.createClient();
  client = redis.createClient();
  module.exports ={
     'getClient':function getClient(){
            return client;
     },
     'publish':function publish(channel,message){
          //  console.log(message);
             MSQueue.pubtest(message);
            client.rpush(channel+'.queue',message);
            clientpub.publish(channel, message, function(err) {
                if (err) throw err;
            });
     },

    'blpopQueue' :function blpopQueue(channel) {
          client.blpop(channel+'.queue', 0, function(err, data){
            console.log('We have retrieved the data from the front of the queue:', data);
              Redis.blpopQueue(channel);
          });
        },
        'brpoplpushQueue' :function brpoplpushQueue(channel) {
              client.brpoplpush(channel+'.queue',channel+'.backup_queue',0,function(err,job){
                 console.log(job);
                   Redis.brpoplpushQueue(channel);
              });
            }

  };
