/*globals describe*/
'use strict';

if (process.env.TESTMODE === 'coverage') {
    require('blanket')({
        pattern: [ '' ],
        'data-cover-never': [ 'node_modules', 'tests' ]
    });
}

//NOTE no need to override config settings, the app does that
//var config = require('../config');

require('./fixture-util').clearAll(function() {
    //no-op
});

describe('Base test APIs', function() {
    require('./api-test-jwt');
});
