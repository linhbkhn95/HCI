module.exports = {
  getInfo: function (req, res) {
    var sid = getCookie.getCookie( req.headers['cookie'],'sessionid');
    sails.log.info('  getInfo: function (req, res) { '+ sid );
    if(sid !=''){
      UserFlex.findOne({sessionid: sid}, function (err, user) {
        if (!user) {
        //  console.log(useremail);
          return res.json(401, {err: 'bạn chưa đăng nhập'});
        }

        res.send(user);
      });
    }else {
        return res.json(401, {err: 'bạn chưa đăng nhập'});
    }
  }
};
