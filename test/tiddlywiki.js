var assert = require('assert');

var tiddlywiki = require('../tiddlywiki');
var tiddler = require('../tiddler');
var container = {
    'host': '0.0.0.0',
    'port': '8080',
    'base': '/bags/test',
};
var tw = new tiddlywiki.TiddlyWiki(container);

exports.tests = {
    tiddlyWikiClass: function() {
        assert.ok(tw instanceof tiddlywiki.TiddlyWiki);
        assert.equal(tw.fetchTiddler('fancy'), null);
    },
    tiddlyWikiStore: function() {
        var tid = new tiddler.Tiddler('fancy');
        tid.text = 'barn';
        tw.addTiddler(tid);
        assert.equal(tw.fetchTiddler('fancy'), tid);
        /*
        tid = new tiddler.Tiddler('cow');
        tid.text = 'moo';
        tw.addTiddler(tid);
        var tiddlers = [];
        tw.forEachTiddler(function(title, tidd) {
            tiddlers.push(tidd);
        });
        assert.equal(tiddlers.length, 2);
        tw.deleteTiddler('fancy');
        var tiddlers2 = [];
        tw.forEachTiddler(function(title, tidd) {
            tiddlers2.push(tidd);
        });
        assert.equal(tiddlers2.length, 1);
        */
     }
};
