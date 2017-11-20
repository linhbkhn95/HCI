 var request = require('request');
 var urlApp = 'http://localhost:1339/';
 var urlResrc = 'http://localhost:1337/';
module.exports={

   getToken: function(code,done) {

         request({
                url: urlResrc+'oauth/token',
                method: 'POST',

                form: {
                  client_id: 'KY66EXF90J',
                  client_secret: 'nOEQOGXwss4CM5TgUd5OTJ7Rtk2hio',
                  grant_type:'authorization_code',
                  redirect_uri: urlApp+'auth/allow',
                  code:code
                }
              }, function(err, res) {
                var json = JSON.parse(res.body);
              //  console.log(json);
                if(err){
                   done('lỗi',null);
                }
              //  console.log("Access Token:", json.access_token);
                   Oauth2.getInfo(json.access_token,function(err,user){
                           done(null,user,res.body);
                  });
              });
    },
    requsetResrc:function(access_token,urlApi,body,method,done){

                if(method=='POST'){
                   Oauth2.requsetPost(access_token,body,urlApi,function(err,rs){
                     done(null,rs);
                   })
                }
                else{
                  Oauth2.requsetPost(access_token,urlApi,function(err,rs){
                    done(null,rs);
                  })
                }
    },
    requsetPost:function(access_token,body,urlApi,done){
        request({
               url: urlResrc+urlApi,
               method: 'POST',

               form:body,
              'auth': {
                 'bearer': access_token
                 }
             }, function(err, res) {
                 done(null,res.body);
             });
    },
    requesetGet:function(access_token,urlApi){
          request.get( urlResrc+urlApi, {
            'auth': {
              'bearer': access_token
              }
            },function(err,res){
                  if(res.body)
                      done(null,res.body);
                   else
                     console.log(err);

            });
    },
    getInfo:function(access_token,done){
          //  console.log('getInfo');
          //  console.log(access_token);

            request.get(urlResrc+'api/info', {
              'auth': {
                'bearer': access_token
                }
              },function(err,res){
                    if(res.body)
                        done(null,res.body);
                     else
                       console.log(err);

              });



          }
}
