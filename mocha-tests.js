/*globals describe*/
'use strict';

require('blanket')({
    pattern: [ '' ],
    'data-cover-never': [ 'node_modules', 'tests' ]
});

var config = require('../config');
//NOTE override the database name so that we do not mess with the real database
config.db.name = 'ezaccounts-integration-tests';

require('./fixture-util').clearAll(function() {
    //no-op
});
