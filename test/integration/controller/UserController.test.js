var request = require('supertest');
var should = require('should');
describe('UserController', function() {

  describe('#addAccount()', function() {
    it('add account', function (done) {
      request(sails.hooks.http.app)
        .post('/user/addAccount')
        .send({ten:'linh'})
        .expect(200)
        .end(function(err, res) {
           if (err) return done(err);
           done();
         });
    });
  });
  /*
     * Test the /user/getInfAccount:id route
  */
  describe('#getInfAccount()', function() {
    it('get information for account', function (done) {
      request(sails.hooks.http.app)
        .post('/user/getInfAccount')
        .send({id:2})
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            res.body.should.be.an.instanceOf(Object);
          //  console.log(res.body);
            res.body.should.have.property('SoCMTND','125750111');
            res.body.should.have.property('NgayCap');
            res.body.should.have.property('NoiCap');
            res.body.should.have.property('TenNguoiDuocUQ');
            res.body.should.have.property('DiaChi');
            //res.should.have.property('pets').with.lengthOf(4);
           done();
         });
    });
  });

});
