/**
 * UserprojectController
 *
 * @description :: Server-side logic for managing userprojects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 add:function(business_id,user_id){
          Userbusiness.create({id:user_id,business_id:business_id}).exce((err,data)=>{
               if(err){
                   return 'error'
               }
               return 'ok'
          })
     }
};

