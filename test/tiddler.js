var assert = require('assert');

var tiddler = require('../tiddler');

exports.tests = {
    tiddlerClass: function() {
        var tw = new tiddler.Tiddler('hello');
        assert.ok(tw instanceof tiddler.Tiddler);
        assert.equal(tw.title, 'hello');
        tw.title = 'cow';
        assert.equal(tw.title, 'cow');
        assert.equal(tw.text, '');
        tw.text = 'moo';
        assert.equal(tw.text, 'moo');
        assert.deepEqual(tw.tags, []);
        tw.tags.push('bovine');
        assert.deepEqual(tw.tags, ['bovine']);
        assert.deepEqual(tw.fields, {});
        tw.fields.funky = 'jam';
        assert.deepEqual(tw.fields, {funky: 'jam'});
     }
};
