/*globals*/
'use strict';

var db = require('../db');

module.exports.clearAll = function clearAll(done) {
    db.collection('account').then(function(accounts) {
        accounts.remove({}, function(err, result) {
            console.log('Removed', result,  'accounts as fixtures.');
            done(err, result);
        });
    });
};

module.exports.insertAccounts = function inserAccounts(done, newAccounts) {
    db.collection('account').then(function(accounts) {
        accounts.insert(newAccounts, function(err, result) {
            // console.log('Inserted', result,  'accounts as fixtures.');
            done(err, result);
        });
    });
};
