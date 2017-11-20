/**
 * ComparecommController
 *
 * @description :: Server-side logic for managing comparecomms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'update':function(req,data){
			sails.log.info('vào update authorize');
			 var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
				Token.findOne({sessionid:sid}).exec(function(err,token){
						 if(err){

								 return res.send(401,'có lỗi');
						 }

						Oauth2.requsetResrc(token.access_token,'authorize/update',req.body,'POST',function(err,rs){
							sails.log.error(rs);
							 //res.send(rs);
						});

				});
			},
		'add':function(req,data){
					// var {ten,socmtnd,ngaycap,noicap,ngaHieuLuc,ngayHetHieuLuc,phamviUyQuyen} = req.body;
					sails.log.info('vào add authorize');
					 var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
						Token.findOne({sessionid:sid}).exec(function(err,token){
								 if(err){

										 return res.send(401,'có lỗi');
								 }

								Oauth2.requsetResrc(token.access_token,'authorize/add',data,'POST',function(err,rs){

								//   res.send(rs);
								});

						});
		},

	'accessAddUpdate':function(req,res,next){
				var {textBtn,data} = req.body;

			try{
					if(textBtn==="ADD"){
						 this.add(req,data);
					}
					else{
						this.update(req,data);
					}
					return res.send("ok");
			}catch(e){
				sails.log.info(e);
				return res.send("fail");
			}

	},
	'get' : function(req,res,next){

		Authorize.findOne({cmtnd:req.body.cmtnd}).exec(function (err, au) {
			 if(err) return next(err);
			 if(!au) return next();

			 return res.send(au);

		});
 },
	destroy: function(req, res, next) {
	 sails.log.info('vào xóa authorize');
		var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
		 Token.findOne({sessionid:sid}).exec(function(err,token){
					if(err){
							
							return res.send(401,'có lỗi');
					}

				 Oauth2.requsetResrc(token.access_token,'authorize/destroy',req.body,'POST',function(err,rs){
					 sails.log.info(rs);
						res.send(rs);
				 });

		 });


 },
	'getAll':function(req,res,next){


			 var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
				Token.findOne({sessionid:sid}).exec(function(err,token){
						 if(err){
								 return res.send(401,'error');
						 }
					if(!token){
							return res.send(401,'no token ');
					}

						 ;
						Oauth2.requsetResrc(token.access_token,'comparecomm/getAll',req.body,'POST',function(err,rs){

							 CompareComm.groupCompareComm(JSON.parse(rs).data,function(err,data){

										  res.send({data:data});
							 })

						});



				});

	}
};
