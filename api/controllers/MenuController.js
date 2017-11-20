/**
 * MenuController
 *
 * @description :: Server-side logic for managing Menus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addWithRole:function(req,res){
        var data= {
             role:"nhanvien",
             data:[	
                {parentId:1,GroupMenu:"Home",
                listItem:[
                    {id: 1, NameMemu: 'Tài khoản(mở/sửa)', link: '/CreateAccountNDT',Component:"CreateAccountNDT"}
              

                    ]},
                {parentId:2,GroupMenu:"Đăng kí công tác",
                listItem:[
                {id: 1, NameMemu: 'Màn hình đặt lệnh', link: '/datlenh',Component:"Home"},
                {id: 2, NameMemu: 'Đối chiếu lệnh-tiền', link: '/cmd',Component:"Account"}

                ]},
                        {parentId:3,GroupMenu:"Thông báo",
                            listItem:[
                        {id: 1, NameMemu: 'Đầu tư định kỳ', link: '/dautudinhky',Component:"Home"}
                        ]}
                    ]
                  
              
                
        }
        Menu.create(data).exec(function (err, menu) {
            if (err) {
                 
                 return res.json(err.status, {err: err});
            }
            // If user created successfuly we return user and token as response
            if(menu) {
                
            // NOTE: payload is { id: user.id}
                    res.json(200, {menu: menu});
            }
        });
    
  },
  getWithRole:function(req,res){
        var role = req.body.role;
        
         
         Menu.findOne({role:role}).exec(function(err,menu){
                if(err){
                    console.log("fail");
                    return  res.send("fail");
                }
                return res.send(menu);
          });
  }
};

