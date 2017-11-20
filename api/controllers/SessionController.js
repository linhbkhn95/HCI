/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var path = require('path');
module.exports = {
	'root':function(req,res){
		   res.views('homepage');
	},
	'new' :function(req,res){
			// oldDateObj = new Date();
			// newDateObj = new Date(oldDateObj.getTime()+18000);
			// req.session.cookie.expires= newDateObj;
			// req.session.authenticated = true;
			// console.log(req.session);
			var dataRole={
				 role:"user",
				 id:"002",
				 type:"M"
			}
			var dataMenu = {
     role: "admin",
     data:[
      {parentId:1,GroupMenu:"Tài khoản NĐT",
       listItem:[
          {id: 1, NameMemu: 'Tài khoản(mở/sửa)', link: '/CreateAccountNDT',Component:"CreateAccountNDT"},
          {id: 2, NameMemu: 'Điều chỉnh thông tin', link: '/login',Component:"Account"},
        {id: 3, NameMemu: 'Đóng tài khoản của Quỹ', link: '/repos',Component:"Respo"},
        {id: 4, NameMemu: 'Vấn tin tài khoản', link: '#',Component:"Account"},
        {id: 5, NameMemu: 'Tất toán tài khoản', link: '#',Component:"Account"}

     ]},
      {parentId:2,GroupMenu:"Lệnh giao dịch",
       listItem:[
      {id: 1, NameMemu: 'Màn hình đặt lệnh', link: '/datlenh',Component:"Home"},
      {id: 2, NameMemu: 'Đối chiếu lệnh-tiền', link: '/cmd',Component:"Account"}


      ]},
			{parentId:3,GroupMenu:"Đầu tư định kỳ",
				listItem:[
			 {id: 1, NameMemu: 'Đầu tư định kỳ', link: '/dautudinhky',Component:"Home"}
			]},
     {parentId:4,GroupMenu:"Chuyển khoản",
       listItem:[
      {id: 1, NameMemu: 'Yêu cầu chuyển khoản CCQ', link: '/',Component:"Home"},
			 {id: 2, NameMemu: 'CK do chấm dứt hoạt động DLPP', link: '/',Component:"Home"},
			 {id: 3, NameMemu: 'Phong tỏa/giải tỏa CCQ tự nguyện', link: '/',Component:"Home"}
     ]},
     {parentId:5,GroupMenu:"Đăng ký dịch vụ gia tăng cho NĐT",
       listItem:[
      {id: 1, NameMemu: 'Đăng ký giao dịch trực tuyến', link: '/',Component:"Home"},
      {id: 2, NameMemu: 'Đăng ký nhận thông tin (SMS/ Email cho NĐT)', link: '/login',Component:"Account"}
		]},
			{parentId:6,GroupMenu:"Ký danh",
				listItem:[
			 {id: 1, NameMemu: 'Phân bổ CCQ', link: '/',Component:"Home"},
			 {id: 2, NameMemu: 'Phân bổ tiền', link: '/login',Component:"Account"},
			 {id: 3, NameMemu: 'Điều chỉnh ký danh', link: '/login',Component:"Account"}
		 ]},
		 {parentId:7,GroupMenu:"Lịch sử giao dịch",
			 listItem:[
			{id: 1, NameMemu: 'Tra cứu TK', link: '/',Component:"Home"},
			{id: 2, NameMemu: 'Tra cứu Lệnh', link: '/login',Component:"Account"},
			{id: 3, NameMemu: 'Tra cứu CK', link: '/login',Component:"Account"}
		 ]}
    ]
   }
			// var dataMenu = {
			// 	 role: "user",
			// 	 data:[
		 // 			{parentId:12,GroupMenu:"Quản lý tài khoản",
		 	// 	  listItem:[
		 // 					  {id: 1, NameMemu: 'Xem thông tin tài khoản', link: '/',Component:"Home"},
		 // 					  {id: 2, NameMemu: 'Cập nhật tài khoản', link: '/login',Component:"Account"}
		 // 			]},
		 // 			{parentId:2,GroupMenu:"Trang chủ",
		 	// 	  listItem:[
			//
		 // 			]}
			//
			//
			// 		]
			// }

			CachedLookup.addMenu(dataMenu);

      //console.log("addRole");
			res.view('session/new');

	},
   loginWithFlex:function(req,res,next){
		   var code = req.param('code');
			 var err  = req.param('error');

			 Oauth2.getToken(code);

			 next();
	 },
	'home' :function(req,res){
			// oldDateObj = new Date();
			// newDateObj = new Date(oldDateObj.getTime()+18000);
			// req.session.cookie.expires= newDateObj;
			// req.session.authenticated = true;
			// console.log(req.session);
			res.view();
	},
	'loginProcess':function(req,res,next){
		var {u, p} = req.body;

				User.findOneByUsername(u,function foundUser(err, user) {
					 if(!user){
						 return res.send("Không tồn tại tài khoản ")
					 }
					 if(user.password===p){
								 req.session.username = user.username;
							 //	console.log(req.session);

						// 	 User.update({username: user.username}).set({
  					// 	 			online: true
						// 				}).exec(function(err, bobs){
						// 		  if (err) return res.serverError(err);
						// 		  if (bobs.length > 1) return res.serverError('Consistency violation: somehow multiple users exist with the same username? There must be a bug elsewhere in the code base.');
						// 		  if (bobs.length < 1) return res.notFound();
						//
					  // // Broadcast a message telling anyone subscribed to Bob that his hair is now red.
					  // // (note that we exclude the requesting socket from the broadcast, and also include Bob's previous hair color)
						// 			  User.publishUpdate(bobs[0].id,
						// 			   {
						// 			    previous:{
						// 			      online: bobs[0].online
						// 			    }}
						// 			  );
						//
						// 			  return res.send({name:user.ten});
						// 			});
							  user.online = true;
								user.save(function(err, u) {
										if (err) return next(err);
									});


								return res.send({name:user.ten});
					 }

				   return res.send('mật khẩu không chính xác');
				 });
	},
	getInfo:function(req,res){
		if(req.session.username){

			return res.send(req.session.username);
		}
		res.send('CHUA_DANG_NHAP');
	},
	'userlogin': function(req, res) {

    // Make sure this is a socket request (not traditional HTTP)
    if (!req.isSocket) {
      return res.badRequest();
    }

    // Have the socket which made the request join the "funSockets" room.
    sails.sockets.join(req, 'funSockets');

    // Broadcast a notification to all the sockets who have joined
    // the "funSockets" room, excluding our newly added socket:
    sails.sockets.broadcast('funSockets', 'userlogin',{username:req.body.u,id:sails.sockets.getId(req)});

    // ^^^
    // At this point, we've blasted out a socket message to all sockets who have
    // joined the "funSockets" room.  But that doesn't necessarily mean they
    // are _listening_.  In other words, to actually handle the socket message,
    // connected sockets need to be listening for this particular event (in this
    // case, we broadcasted our message with an event name of "hello").  The
    // client-side you'd need to write looks like this:
    //
    // io.socket.on('hello', function (broadcastedData){
    //   console.log(data.howdy);
    //   // => 'hi there!'
    // }
    //

    // Now that we've broadcasted our socket message, we still have to continue on
    // with any other logic we need to take care of in our action, and then send a
    // response.  In this case, we're just about wrapped up, so we'll continue on

    // Respond to the request with a 200 OK.
    // The data returned here is what we received back on the client as `data` in:
    // `io.socket.get('/say/hello', function gotResponse(data, jwRes) { /* ... */ });`
    return res.send({
      anyData: 'we want to send back'
    });

  },
	getMenu:function(req,res){
		 sails.log('info', 'Hello distributed log files!');
		// var data = [
		// 	{parentId:11,GroupMenu:"Quản lý thông tin tài khoản",
		//   listItem:[
		// 			  {id: 1, NameMemu: 'Mở tài khoản NĐT', link: '/',Component:"Home"},
		// 			  {id: 2, NameMemu: 'Yêu cầu đóng tài khoản', link: '/login',Component:"Account"}
		// 	]},
		// 	{parentId:2,GroupMenu:"Lệnh giao dịch",
		//   listItem:[
		// 			  {id: 3, NameMemu: 'Đổi chiều tiền-lệnh', link: '/',Component:"Home"},
		// 			  {id: 4, NameMemu: 'Xác nhận đổi chiều', link: '/login',Component:"Account"},
		// 			  {id: 5, NameMemu: 'Xác nhận/Từ chối yêu cầu hủy/sửa', link: '/About',Component:"Transaction"}
		// 	]},
		// 	{parentId:12,GroupMenu:"Chuyển quyền sở hữu",
		//   listItem:[
		// 			  {id: 6, NameMemu: 'Yêu cầu chuyển khoản CCQ', link: '/',Component:"Home"}
		//
		// 	]}
		//
		// ];
        Menu.findOne({role:'nhanvien'}).exec(function(err,menu){
          console.log(menu);
		// CachedLookup.loadMenu("admin",function(err,data){
		// 	var retArray = [];
		//  var len = data.length;
		//  data.forEach(function(c){
		// 	 try{
		// 		 retArray.push(JSON.parse(c));
		// 		 console.log(len);
		//
		// 	 }catch(e){
		// 		 log.error(e.message);
		// 	 }
		// 	 len--;
		// 	 if (len === 0)  res.send(retArray);
		//  });
		// 	 ;
		// });
	//	console.log(data);
		     //var results =Object.keys(data).map(function(k) { return data[k] });
				 try{
					   res.send(menu.data);
				 }catch(e){
            sails.log.error(e);
						res.send([]);
				 }

	   })

	},
	logOut: function(req, res, next) {
   var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
		UserFlex.findOne({sessionid:sid}, function foundUserFlex(err, au) {
			if (err) return next(err);

			if (!au) return next('User doesn\'t exist.');

			UserFlex.destroy({sessionid:sid}, function auDestroyed(err) {
				if (err) return res.send(err);

        res.clearCookie('current_sid',{ path: '/' });
				res.send('ok');
		 });

	 });

 }
};
