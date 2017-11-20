/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
  var request = require('request');
 module.exports = {
           'allow':function(req,res){
             sails.log.debug('allow');
          //   console.log(req.body);
             sails.log.debug(req.param('code'));
             if(req.param('code')){
                Oauth2.getToken(req.param('code'),function(err,user,obj_tocken){
                    // console.log(user);
                    // console.log('obj_tocken');
                    // console.log(obj_tocken);
                    var obj = JSON.parse(user);
                    var token = JSON.parse(obj_tocken);
                    UserFlex.create({email:obj.email,password:obj.hashedPassword,sessionid: getCookie.getCookie( req.headers['cookie'],'sessionid')}).exec(function(err,userflex){
                       if(err){
                         sails.log.error(err);
                       }
                       req.session.userId = userflex.id;


                  //     console.log(userflex);
                    })
                    Token.create({sessionid: getCookie.getCookie( req.headers['cookie'],'sessionid'),access_token:token.access_token,refresh_token:token.refresh_token,expires_in:token.expires_in,token_type:token.token_type}).exec(function(err,token){
                       if(err){
                         sails.log.error(err);
                       }
                //       console.log(token);
                    })

                    // if (!req.isSocket) {
                    //         return res.badRequest();
                    // }

                    var socketId = sails.sockets.getId(req);
                          // => "BetX2G-2889Bg22xi-jy"

                    //set lại sid ban dau bang current_sid
                     var sid = getCookie.getCookie( req.headers['cookie'],'current_sid');
                    //   console.log('My session ID is: ' + sid);
              //       res.cookie('sessionid', sid);

                   return res.redirect('http://localhost:1339/login');
                 });
               }
               else{
                 req.session.flash={
                    err:'da tu choi'
                 }
                   return  res.status(401).redirect('http://localhost:1339/login');
               }

           },
          'flex':function(req,res){


                                      // => "BetX2G-2889Bg22xi-jy"
                                var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
                                res.cookie('current_sid', sid)
                            //    console.log('My sessionid is: ' +sid);
                // request.get('http://localhost:1337/oauth/authorize?client_id=KY66EXF90J&response_type=code&redirect_uri=http://localhost:1339/auth/flex/callback&scope=info%20email',function(err,res){
                //         if(res.body)
                //             console.log(res.body);
                //          else
                //            console.log(err);
                //
                //   });
                // res.redirect('http://localhost:1337/oauth/authorize?client_id=KY66EXF90J&response_type=code&redirect_uri=http://localhost:1339/auth/flex/callback&scope=info%20email',function(err,res){
                //            console.log(res);
                // });
                return res.redirect('http://localhost:1337/oauth/authorize?client_id=KY66EXF90J&response_type=code&redirect_uri=http://localhost:1339/auth/allow&scope=info%20email');

           },
          loginFlex:function(req,res){
              var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
              sails.log.debug('  loginFlex: function (req, res) { '+ sid );
              if(sid !=''){
                UserFlex.findOne({sessionid: sid}, function (err, user) {
                  if (!user) {
                  //  console.log(useremail);
                    return res.json(401, {err: 'bạn chưa đăng nhập'});
                  }
                  req.session.user=user;

                  res.json({
                    user: user,
                    token: jwToken.issue({id : user.id,username:user.email })
                  });
                });
              }else {
                  return res.json(401, {err: 'bạn chưa đăng nhập'});
              }
          },
          index: function (req, res) {
            var email = req.param('email');
            var password = req.param('password');

            if (!email || !password) {
              return res.json(401, {err: 'email and password required'});
            }

            Users.findOne({email: email}, function (err, user) {
              if (!user) {
                console.log(email);
                return res.json(401, {err: 'invalid email or password'});
              }

              Users.comparePassword(password, user, function (err, valid) {
                if (err) {
                  return res.json(403, {err: 'forbidden'});
                }

                if (!valid) {
                  return res.json(401, {err: 'invalid email or password'});
                } else {
                
                  res.json({
                    user: user,
                    token: jwToken.issue({id : user.id,username:user.email })
                  });
                }
              });
            })
          }
};
