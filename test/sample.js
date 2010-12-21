var assert = require('assert');

exports.tests = {
    aPassingTest : function() {
        assert.ok(true);
    },
    anotherOne: function() {
        assert.equal(1, 1);
    },
};
