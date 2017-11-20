var redis = require("redis"),
  client = redis.createClient();

module.exports = {

  rcGet: function (key, cb) {
    client.get(key, function (err, value) {
      return cb(value);
    });
  },
  //add role in app

  addRole: function addRole(data){

      client.multi()
      .zadd('role:' + data.role, Date.now(), JSON.stringify(data))
      .zadd('roles', (new Date).getTime(),data.role)
      .exec();


  },
  addMenu: function addMenu(obj,cb){

      client.multi()
      .zadd('menu:' + obj.role, Date.now(), JSON.stringify(obj.data))
      .exec();


  },
  loadMenu: function loadMenu(role,cb){
     client.zrevrangebyscore('menu:' + role, '+inf', '-inf',function(err,result){
        if (err) {
           console.log('co loi ');
           console.log(err);
        } else {
          // do something with raesults
        //  console.log('lay ra thanh cong ');
        //  console.log(result)
          //return result;
        //  console.log(result);
          cb(null, JSON.parse(result));
       }
     });
  },
  getUser: function getUser(username,cb){
     client.hgetall('user:' + username,function(err,result){
      if (err) {
         console.log('co loi ');
      } else {
        // do something with raesults
      //  console.log('lay ra thanh cong ');
      //  console.log(result)
        //return result;
        cb(null,result);
     }
  });

  },
  fetchApi1: function (cb) {
    var key = 'KEY'
    CachedLookup.rcGet(key, function (cachedValue) {
      if (cachedValue)
        return cb(cachedValue)
     else {//fetch the api and cache the result
        var request = require('request');
        request.post({
          url: URL,
          form: {}
        }, function (error, response, body) {
            if(error) {
               //handle error
            }
            else {
            client.set(key, response);
            return cb(response)
            }
        });
      }
    });
  }
}
