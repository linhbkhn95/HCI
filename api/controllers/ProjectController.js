/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get_all:function(req,res){
        Project.find({select:['name','id']}).exec((err,listproject)=>{
            if(err){
                return res.send('err');

            }
           return res.send(listproject);
        })
    },
   
};

