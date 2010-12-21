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
        tw.fetchTiddler('fancy',
                function(data) {},
                function(data, err) {
                    assert.equal(data, null);
                    assert.equal('404', err.statusCode);
                    });
    },
    tiddlyWikiStore: function() {
        var tid = new tiddler.Tiddler('fancy');
        tid.text = 'barn';
        var addfancy  = function() {
            tw.addTiddler(tid,
                function() {fetchfancy()},
                function(err) {
                    console.log(err);
                }
            );
        };
        var fetchfancy = function() {
            tw.fetchTiddler('fancy',
                function(data) {
                    assert.equal(data.title, tid.title);
                    assert.equal(data.text, tid.text);
                    assert.deepEqual(data.tags, tid.tags);
                    addcow();
                },
                function(data, err) { }
            );
        }
        var addcow = function() {
            var tid2 = new tiddler.Tiddler('cow');
            tid2.text = 'moo';
            tw.addTiddler(tid2,
                function() {countone()},
                function(err) {
                    console.log(err);
                }
            );
        };
        var countone = function() {
            var tiddlers = [];
            tw.forEachTiddler(
                function(title, tidd) {
                    tiddlers.push(tidd);
                },
                function() {
                    assert.equal(tiddlers.length, 2);
                    deletefancy()
                },
                function(err) {
                    console.log(err);
                }
            );
        };
        var deletefancy = function() {
            tw.deleteTiddler('fancy',
                function() {counttwo()},
                function(err) {
                    console.log(err);
                }
            );
        };
        var counttwo = function() {
            var tiddlers2 = [];
            tw.forEachTiddler(
                function(title, tidd) {
                    tiddlers2.push(tidd);
                },
                function() {
                    assert.equal(tiddlers2.length, 1);
                },
                function(err) {
                    console.log(err);
                }
            );
        };
        addfancy();
     }
};
