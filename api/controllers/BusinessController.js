

/**
 * BusinessController
 *
 * @description :: Server-side logic for managing businesses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	register:function(req,res){
          var data = req.body
          console.log(data);
          let obj={};
          obj.project_id = data.project_id;
          obj.date_start = data.date_start;
          obj.date_finish = data.date_finish;
          obj.target = data.target;
          obj.address = data.address;
          obj.user_id = data.user_id;
          obj.cost = data.cost;
          obj.status = 1;
          Business.create(obj).exec((err,business)=>{
                if(err){
                    return res.send('error');

                }
                // var data = data.listperson.map((person)=>{
                //     return Userbusiness.add(person.==)
                // })
                res.send(business);
          })
    },
    getlist:function(req,res){
        let user_id = req.body.user_id;
        console.log(req.body);
        StoreProcedure.query('call quanlycongtac.getlist_business(?)', [user_id],function(err, [data,serverStatus]) {
            if (err) {
                 console.log(err);
                return res.send('err');

            }
            return res.send(data);

        });
    },
    getlist_needbrowse:function(req,res){
            let status=2;
            let role = req.body.role;
            console.log(req.body);
            if(role=='kt')
               status=0;
            
            StoreProcedure.query('call quanlycongtac.getlist_needbrowse(?)', [status],function(err, [data,serverStatus]) {
                if (err) {
                     console.log(err);
                    return res.send('err');

                }
                return res.send(data);

            });
            //Business.find({status}).ex
    },
    access_browse:function(req,res){
            console.log(req.body);
            let status=2;
            let {role,business_id}= req.body;
            if(role=='ql')
                status=1;
            StoreProcedure.query('call quanlycongtac.access_browse(?,?)',[business_id,status], function (err, [data,serverStatus]) {
                if (err) {
                    
                    return res.send('err');
                }
                return res.send(data);

            });
    },
    
    delay_browse:function(req,res){
            console.log(req.body);
         
            let {business_id}= req.body;
          
            StoreProcedure.query('call quanlycongtac.delay_browse(?)',[business_id], function (err, [data,serverStatus]) {
                if (err) {
                    
                    return res.send('err');
                }

                return res.send(data);

            });
    }

};

