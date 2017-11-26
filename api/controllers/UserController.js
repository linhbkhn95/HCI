/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'get':function(req,res){
		let email = req.body.email;
		console.log(email);
		User.findOne({email:email}).exec(function(err,user){
			if(err){
                   res.send('error');
			}
			res.send(user)
		})
	},
	'add':function(req,res){
		   var data ={id:2,name:'Xuân Trinh',email:'a',role:'nhanvien'}

           console.log('add user');
		   User.create(data).exec(function(err,au){
			if(err){

		      res.send(401,"lỗi thêm authorize");

			 //return  res.send(err)
			}

			res.send(au);


		});



       res.end();
	},
	update_profile:function(req,res){
		let {user_id,phone,name} = req.body;
		StoreProcedure.query('call quanlycongtac.update_user_profile(?,?,?)',[user_id,phone,name], function (err, [data,serverStatus]) {
			if (err) {
				
				return res.send('err');
			}
			console.log(data);
			res.send(data);

		});
			
	},
	get_profile:function(req,res){
	   let user_id = req.body.user_id
	    console.log(user_id);
	   StoreProcedure.query('call quanlycongtac.get_info_user(?)',user_id, function (err, [data,serverStatus]) {
			if (err) {
				
				return res.send('err');
			}
			console.log(data);
			res.send(data);

		});
	},
	changepass:function(req,res){
		let {password,newpass,user_id} = req.body;
		console.log(req.body);
		
		User.findOne({id:user_id}).exec((err,user)=>{
			if(err){
				   console.log(err);
				   return res.send(err);
			}
			console.log(user)
			if(user.password.trim()==password){
				

				StoreProcedure.query('call quanlycongtac.changepass(?,?)',[user_id,newpass], function (err, [data,serverStatus]) {
					if (err) {
						
						return res.send('err');
					}
					console.log(serverStatus);
					
					return res.send(data);

					
		
				});
			}
			else return res.json(401, {err: 'Mật khẩu không chính xác'});
			
			
		})
	},
	search_all:function(req,res){
		let key = req.body.key;
		let result=[];
		User.find({ name: { 'like': "%"+key+'%' }}).exec(function(err,users){
			if(err){
				res.send('error');

			}
			
			result = users.map((user) => {
				return {
					value: user.id,
					label: user.name
					
				}
			})
            console.log(result);
			res.send(result);
		})
	}
	
};
