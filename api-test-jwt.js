/*globals describe, it*/
'use strict';

var agent = require('./agent');
var auth = require('../auth');

describe('Test the JWT and account middlewware on /api/test* APIs', function() {

    it('should GET /api/test/noauth', function(done) {
        agent.get('/api/test/noauth')
            .expect(200)
            .expect(JSON.stringify({
                test: 'success',
            }))
            .end(done);
    });

    it('should not GET /api/test without authorization', function(done) {
        agent
            .get('/api/test')
            .expect(401)
            .expect({
                err: 'Authorization Missing',
            })
            .end(done);
    });

    var invalidToken = "AnInvalidToken";
    it('should not GET /api/test with invalid token', function(done) {
        agent
            .get('/api/test')
            .set('authorization', invalidToken)
            .expect(401)
            .expect({
                err: 'Invalid Token',
                msg: invalidToken,
            })
            .end(done);
    });

    var validTokenNoSubject = auth.create({
        expiresHours: 0.5,
    });
    it('should not GET /api/test with valid token without subject', function(done) {
        agent
            .get('/api/test')
            .set('authorization', validTokenNoSubject)
            .expect(401)
            .expect({
                err: 'Authorization Subject Not Found',
                msg: null,
            })
            .end(done);
    });

});
