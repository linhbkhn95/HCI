/**
 * MenuController
 *
 * @description :: Server-side logic for managing Menus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addWithRole:function(req,res){
        var data= {
             role:"kt",
             data:[	
                {parentId:1,GroupMenu:"Trang chủ", link:"/home",
                listItem:[
              

                    ]},
                {parentId:2,GroupMenu:"Quản lý công tác",
                listItem:[
                {id: 1, NameMemu: 'Đăng kí đi công tác', link: '/registerBusiness',Component:"Home"},
                {id: 2, NameMemu: 'Danh sách công tác', link: '/listBusiness',Component:"Account"},
                {id: 3, NameMemu: 'Xin thêm chi phi công tác', link: '/action/addBusiness',Component:"Account"},
              
                {id: 4, NameMemu: 'Duyệt đăng kí công tác ', link: '/browseWork',Component:"Account"},
                {id: 5, NameMemu: 'Upload hóa đơn ', link: '/actionBusiness/uploadOrder',Component:"Account"}
                
                

                ]},
                {parentId:3,GroupMenu:"Quản lý phản hồi Công tác",
                    listItem:[
                         {       id: 1, NameMemu: 'Danh sách phản hồi', link: '/listResponse',Component:"Home"}
                ]},
                     
              
                
                 {parentId:3,GroupMenu:"Tra cứu",
                      listItem:[{  id: 1, NameMemu: 'người sủ dụng', link: '/search/person',Component:"Home"},
                             {  id: 1, NameMemu: 'Dự án', link: '/search/project',Component:"Home"}
                                
                  ]},
                  {parentId:3,GroupMenu:"Thống kê/ Báo cáo",
                  listItem:[{  id: 1, NameMemu: 'Thống kê', link: '/statistical',Component:"Home"}
                        
                            
                 ]}
                ]
                 
              
                    
                  
              
                
        }
        Menu.create({role:'kt',data_menu:JSON.stringify(data.data)}).exec(function (err, menu) {
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
        
         
         Menu.findOne({role:"nv"}).exec(function(err,menu){
                if(err){
                    console.log("fail");
                    return  res.send("fail");
                }
                return res.send(menu);
          });
  }
};

