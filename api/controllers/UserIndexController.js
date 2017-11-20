module.exports = {

          'update':function(data){
                // var {ten,socmtnd,ngaycap,noicap,ngaHieuLuc,ngayHetHieuLuc,phamviUyQuyen} = req.body;

                Authorize.update({cmtnd:data.cmtnd},data, function AuthorizeUpdated(err) {
              //  Authorize.update({cmtnd:data.cmtnd},data).exec(function afterwards(err){
                   if (err) {
            				 console.log(err);
                     sails.log.error(err);
                  //   return res.send(err);
                   }


                 });

            },
            'add':function(data){
                  // var {ten,socmtnd,ngaycap,noicap,ngaHieuLuc,ngayHetHieuLuc,phamviUyQuyen} = req.body;
                  // var data=req.body.data;

                   Authorize.create(data,function Authorize(err,au){
                    if(err){


                     sails.log.error(err);

                     //return  res.send(err)
                    }

                  });
            },
          'accessAddUpdate':function(req,res,next){
                var {textBtn,data} = req.body;

              try{
                  if(textBtn==="Thêm mới"){
                     this.add(data);
                  }
                  else{
                    this.update(data);
                  }
                  return res.send("ok");
              }catch(e){
                sails.log.error(e);
                return res.send("fail");
              }

          },
          'search':function(req,res,next){

              var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
               Token.findOne({sessionid:sid}).exec(function(err,token){
                    if(err){
                        return res.send(401,'error');
                    }
                 if(!token){
                     return res.send(401,'no token ');
                 }


                   Oauth2.requsetResrc(token.access_token,'userindex/search',req.body,'POST',function(err,rs){

                      if(err){
                        sails.log.error(err);
                        res.send({});
                      }
                      res.send(JSON.parse(rs));
                   });



               });
           },

          'get' : function(req,res,next){
            console.log(req.body.shtk);
            console.log('userindex/get '+ req.body.shtk);
            var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
             Token.findOne({sessionid:sid}).exec(function(err,token){
                  if(err){
                      return res.send(401,'error');
                  }
               if(!token){
                   return res.send(401,'no token ');
               }

                  console.log(token);
                 Oauth2.requsetResrc(token.access_token,'userindex/get',req.body,'POST',function(err,rs){
                    console.log(rs);
                    if(err){
                      console.log(err);
                      res.send({});
                    }
                    res.send(JSON.parse(rs));
                 });



             });
       	 },
          destroy: function(req, res, next) {

      		 Authorize.findOne({cmtnd:req.body.cmtnd}, function foundAuthorize(err, au) {
      			 if (err) return next(err);

      			 if (!au) return next('User doesn\'t exist.');

      			 Authorize.destroy({cmtnd:req.body.cmtnd}, function auDestroyed(err) {
      				 if (err) return next(err);

      				//  // Inform other sockets (e.g. connected sockets that are subscribed) that this user is now logged in
      				//  User.publishUpdate(user.id, {
      				// 	 name: user.name,
      				// 	 action: ' has been destroyed.'
      				//  });
      				 //
      				//  // Let other sockets know that the user instance was destroyed.
      				//  User.publishDestroy(user.id);

      			 });

      			 res.send("ok");

      		 });
      	 },
         'getAllStatus':function(req,res){
           var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
            Token.findOne({sessionid:sid}).exec(function(err,token){
                 if(err){
                     return res.send(401,'error');
                 }
              if(!token){
                  return res.send(401,'no token ');
              }

                 console.log(token);
                Oauth2.requsetResrc(token.access_token,'userindex/getAllStatus',req.body,'POST',function(err,rs){
                   console.log(rs);
                   if(err){
                     console.log(err);
                     res.send({});
                   }
                   res.send(JSON.parse(rs));
                });

              });
          },
          'getAll':function(req,res,next){

             console.log('userindex/getAll');
             var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
              Token.findOne({sessionid:sid}).exec(function(err,token){
                   if(err){
                       return res.send(401,'error');
                   }
                if(!token){
                    return res.send(401,'no token ');
                }

                   console.log(token);
                  Oauth2.requsetResrc(token.access_token,'userindex/getAll',req.body,'POST',function(err,rs){
                     console.log(rs);
                     if(err){
                       console.log(err);
                       res.send({});
                     }
                     res.send(JSON.parse(rs));
                  });



              });


          }
}
