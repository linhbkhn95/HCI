

module.exports = {

          'update':function(req,data){
              sails.log.info('vào update authorize');
               var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
                Token.findOne({sessionid:sid}).exec(function(err,token){
                     if(err){

                        // return res.send(401,'có lỗi');

                     }

                    Oauth2.requsetResrc(token.access_token,'authorize/update',data,'POST',function(err,rs){

                      // res.send(rs);
                    });

                });
              },
            'add':function(req,data){
                  // var {ten,socmtnd,ngaycap,noicap,ngaHieuLuc,ngayHetHieuLuc,phamviUyQuyen} = req.body;
                  // console.log('vào add authorize');
                  //  var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
                  //   Token.findOne({sessionid:sid}).exec(function(err,token){
                  //        if(err){
                  //            console.log('có lỗi');
                  //            //return res.send(401,'có lỗi');
                  //        }
                  //       AuthorizeCaching.add('authorize',data.cmtnd,data,function(err,rsredis){
                  //          console.log(rsredis);
                  //       });
                  //       Oauth2.requsetResrc(token.access_token,'authorize/add',data,'POST',function(err,rs){
                  //         console.log(rs);
                  //         // res.send(rs);
                  //       });
                  //
                  //   });
                        sails.log.info('vào add authorize');

                  Authorize.create(data,function(err,au){
                     if(err){

                  //     res.send(401,"lỗi thêm authorize");

                      //return  res.send(err)
                     }

                     Authorize.publishCreate(au);
                     // vi redis k dinh nghia kieu object nen can chuyen qua dang string
                     MSQueue.pubtest('add '+au.id);



                 });
            },

          'accessAddUpdate':function(req,res,next){
                var {textBtn,data} = req.body;

              try{
                  if(textBtn==="Thêm"){
                     sails.log.info('vào add authorize');

                      Authorize.create(data,function(err,au){
                         if(err){

                      //     res.send(401,"lỗi thêm authorize");
                           sails.log.error(err);
                          //return  res.send(err)
                         }
                         Authorize.publishCreate(au);
                         // vi redis k dinh nghia kieu object nen can chuyen qua dang string
                  //       Redis.publish('add_Authorize',JSON.stringify(au));
                          MSQueue.pubtest('ex_Authorize','queue_Authorize',data);
                    });



                  }else{
                    this.update(req,data);
                  }
                  return res.send("ok");
              }catch(e){

                return res.send("fail");
              }

          },
          'get' : function(req,res,next){


            sails.log.info('vào get authorize');
             var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
              Token.findOne({sessionid:sid}).exec(function(err,token){
                   if(err){
                       sails.log.error('có lỗi');
                       return res.send(401,'có lỗi');
                   }

                  Oauth2.requsetResrc(token.access_token,'authorize/get',req.body,'POST',function(err,rs){
                  //  console.log(rs);
                     res.send(rs);
                  });

              });
       	 },
          destroy: function(req, res, next) {
           sails.log.info('vào xóa authorize');
            var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
             Token.findOne({sessionid:sid}).exec(function(err,token){
                  if(err){
                      sails.log.error('có lỗi');
                      return res.send(401,'có lỗi');
                  }

                 Oauth2.requsetResrc(token.access_token,'authorize/destroy',req.body,'POST',function(err,rs){

                    res.send(rs);
                 });

             });


      	 },
          'getAll':function(req,res,next){
              sails.log.info('getAll:function(req,res,next){ Authorize');
              //  var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
              //   Token.findOne({sessionid:sid}).exec(function(err,token){
              //        if(err){
              //            return res.send(401,'error');
              //        }
              //     if(!token){
               //
              //         Token.destroy(function(){
              //             console.log('delete all token');
              //         });
              //         return res.send(401,'no token ');
              //     }
               //
              //        console.log(token);
              //       Oauth2.requsetResrc(token.access_token,'authorize/getAll',req.body,'POST',function(err,rs){
              //         console.log('lay data roi nhe');
              //         console.log(rs);
              //         if(err){
              //           console.log(err);
              //           res.send({});
              //         }
              //         res.send(JSON.parse(rs));
              //       });



              //  });
              if (!req.isSocket) {
                sails.log.debug('no socket');
                  return res.badRequest();
              }

              if (req.isSocket) {
                  // If this code is running, it's made it past the `isAdmin` policy, so we can safely
                  // watch for `.publishCreate()` calls about this model and inform this socket, since we're
                  // confident it belongs to a logged-in administrator.
                    sails.log.debug('is socket');
                  Authorize.watch(req );
              }

              Authorize.count(function foundAuthorize(err,length){
                 if(err) return next(err);

              //   console.log(  ' Authorize.count(function foundAuthorize(err,length){ ở bên App');
                 var pagesize = req.body.pagesize;
              //   console.log(req.body.pagesize);
                 var numOfPages= Math.ceil(length/pagesize);
            //        console.log(numOfPages);
                 var start = (req.body.page-1)*pagesize;

                 Authorize.find().paginate({ limit: pagesize,page:req.body.page }).exec(function(err,rs){
                //    console.log(rs);
                    res.send({data:rs,numOfPages:numOfPages});
               })

               });

          }
}
