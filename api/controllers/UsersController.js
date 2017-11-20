/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 /**
  * UsersController
  *
  * @description :: Server-side logic for managing users
  * @help        :: See http://links.sailsjs.org/docs/controllers
  */

 module.exports = {
   create: function (req, res) {
     if (req.body.password !== req.body.confirmPassword) {
       return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
     }
      
     Users.create(req.body).exec(function (err, user) {
       if (err) {
         return res.json(err.status, {err: err});
       }
       // If user created successfuly we return user and token as response
       if (user) {
         // NOTE: payload is { id: user.id}
         res.json(200, {user: user, token: jwToken.issue({id: user.id})});
       }
     });
   }
 };
